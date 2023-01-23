import{B as p,n as c,Y as y,d as u,Z as _,k as f,$ as g,L as P}from"./index-97d68077.js";import{n as h,a3 as m,T as v,_ as E,bx as w,S,Y as T,$ as k,R as n,a as b,b as C,as as A,bI as x,a0 as o,w as d,u as M,o as $}from"./TaskInfo-3bc19eae.js";const L={name:"error-text",props:{text:{default:"",type:String},hidden:{default:!1,type:Boolean},alignRight:{default:!1,type:Boolean}}};var D=function(){var t=this,i=t._self._c;return i("p",{class:{error:!0,"has-text-right":t.alignRight,"is-hidden":t.hidden}},[t._v(" "+t._s(t.text)+" ")])},F=[],B=h(L,D,F,!1,null,null,null,null);const I=B.exports;const j={name:"productions",components:{BuildFilterModal:p,ButtonSimple:m,Combobox:v,ComboboxTaskType:c,ErrorText:I,EditPlaylistModal:y,LightEntityThumbnail:E,PageSubtitle:u,PlaylistPlayer:_,PlusIcon:w,SearchField:f,Spinner:S,TaskTypeName:T,XIcon:k},data(){return{currentPlaylist:{name:""},currentSort:"updated_at",currentEntities:{},isAddingEntity:!1,isListToggled:!1,page:1,taskTypeId:"",sortedPlaylists:[],sortOptions:["updated_at","created_at","name"].map(s=>({label:s,value:s})),playlistToEdit:{name:`${n().format("YYYY-MM-DD HH:mm:ss")}`,for_client:!1},previewFileMap:new Map,previewFileEntityMap:new Map,modals:{isBuildFilterDisplayed:!1,isDeleteDisplayed:!1,isEditDisplayed:!1},loading:{addPlaylist:!1,addDaily:!1,addEpisode:!1,addMovie:!1,addSequence:!1,addWeekly:!1,deletePlaylist:!1,editPlaylist:!1,playlist:!1,playlists:!1,playlistsInit:!0},errors:{addPlaylist:!1,editPlaylist:!1,deletePlaylist:!1,playlistLoading:!1}}},computed:{...b(["assetMap","assetSearchText","currentEpisode","currentProduction","displayedAssets","displayedAssetsByType","displayedShots","displayedShotsBySequence","isAssetsLoading","isCurrentUserManager","isCurrentUserSupervisor","isShotsLoading","isTVShow","productionTaskTypes","playlistMap","playlists","playlistsPath","shotsByEpisode","shotSearchText","shotMap","taskMap","taskStatusMap","taskTypeMap"]),isAdditionLoading(){return this.loading.addSequence||this.loading.addWeekly||this.loading.addDaily||this.loading.addEpisode},isAssetPlaylist(){return this.currentPlaylist.for_entity==="asset"},isAddSearchVisible(){return this.isAssetPlaylist&&this.assetSearchText||!this.isAssetPlaylist&&this.shotSearchText},lastPlaylists(){return this.playlists},playlistPlayer(){return this.$refs["playlist-player"]},addEntitiesText(){return this.isAssetPlaylist?this.$t("playlists.add_assets"):this.$t("playlists.add_shots")},tvShowPageTitle(){const s=this.currentProduction?this.currentProduction.name:"";let t="";return this.currentEpisode&&(t=this.currentEpisode.name,this.currentEpisode.id==="all"&&(t=this.$t("main.all")),this.currentEpisode.id==="main"&&(t="Main Pack")),`${s} - ${t} | ${this.$t("playlists.title")} - Kitsu`},shortPageTitle(){return`${this.currentProduction?this.currentProduction.name:""} ${this.$t("playlists.title")} - Kitsu`},taskTypeList(){return[{id:"",color:"#999",name:this.$t("news.all")}].concat([...this.productionTaskTypes])}},methods:{...C(["addNewBuildJob","pushEntityToPlaylist","changePlaylistOrder","changePlaylistPreview","changePlaylistType","displayMoreAssets","displayMoreShots","editPlaylist","getPending","loadMorePlaylists","loadPlaylist","loadPlaylists","loadEntityPreviewFiles","loadShots","loadAssets","markBuildJobAsDone","newPlaylist","refreshPlaylist","removeEntityPreviewFromPlaylist","removeBuildJobFromList","setAssetSearch","setCurrentEpisode","setShotSearch","updatePreviewAnnotation"]),formatDate(s){return A(s)},getPlaylistPath(s,t){return x(this.currentProduction.id,this.currentEpisode?this.currentEpisode.id:null,s,t)},playlistElementStyle(s){const t=this.taskTypeMap.get(s.task_type_id);return{"border-left":"2px solid "+(t?t.color:"transparent")}},getTaskStatus(s){if(s=this.shotMap.get(s.id),s||(s=this.assetMap.get(s.id)),!s)return{};const t=s.validations.get(this.currentPlaylist.task_type_id);if(t){const i=this.taskMap.get(t);return i?this.taskStatusMap.get(i.task_status_id):{}}else return{}},loadShotsData(s){this.displayedShots.length===0||this.displayedShots[0].project_id!==this.currentProduction.id||this.currentEpisode&&this.displayedShots[0].episode_id!==this.currentEpisode.id?this.isTVShow&&this.currentEpisode&&(this.currentEpisode.id==="main"||this.currentEpisode.id==="all")?s():this.loadShots(s):s()},loadAssetsData(){return this.isTVShow||this.displayedAssets.length===0?this.loadAssets():Promise.resolve()},loadPlaylistsData(s=!1){const t=()=>{this.setCurrentPlaylist(()=>((!this.currentPlaylist||!this.currentPlaylist.id)&&this.goFirstPlaylist(),Promise.resolve()))};return this.playlists.length===0||s?this.loadPlaylists({sortBy:this.currentSort,page:this.page,taskTypeId:this.taskTypeId}).then(()=>t()).catch(i=>(console.error(i),this.errors.loadPlaylists=!0,Promise.reject(i))):t()},onPlaylistListScroll(s,t){if(this.$options.silentMore)return;const i=this.$refs.playlistList;i.scrollHeight-i.offsetHeight<t.scrollTop+20&&(this.$options.silentMore=!0,this.page++,this.loadMorePlaylists({sortBy:this.currentSort,page:this.page,taskTypeId:this.taskTypeId}).then(a=>{setTimeout(()=>{this.$options.silentMore=!1},1e3)}).catch(a=>(console.error(a),this.$options.silentMore=!1,this.errors.loadPlaylists=!0,Promise.reject(a))))},rebuildCurrentEntities(){this.currentEntities={};const s={};this.previewFileMap=new Map,this.previewFileEntityMap=new Map,this.currentPlaylist&&this.currentPlaylist.shots&&this.currentPlaylist.shots.forEach(t=>{const i=this.convertEntityToPlaylistFormat(t);i&&(s[i.id]=i,this.previewFileEntityMap.set(t.preview_file_id,i),Object.values(i.preview_files).forEach(a=>{a.forEach(l=>{this.previewFileMap.set(l.id,l)})}))}),this.$nextTick(()=>{this.currentEntities=s})},onAnnotationsRefreshed(s){const t=this.previewFileEntityMap.get(s.id),i=this.previewFileMap.get(s.id);t&&(t.preview_file_annotations=s.annotations),i&&(i.annotations=s.annotations)},convertEntityToPlaylistFormat(s){let t;if(this.isAssetPlaylist?t=this.assetMap.get(s.id):t=this.shotMap.get(s.id),t){const i={id:s.id,name:t.name,parent_name:t.sequence_name||t.asset_type_name,preview_files:s.preview_files,preview_file_id:s.preview_file_id||t.preview_file_id,preview_file_extension:s.preview_file_extension||t.preview_file_extension,preview_file_task_id:s.task_id||s.preview_file_task_id||t.preview_file_task_id,preview_file_annotations:s.preview_file_annotations||t.preview_file_annotations,preview_file_previews:s.preview_file_previews||t.preview_file_previews,preview_nb_frames:s.nb_frames||t.nb_frames||g};return this.previewFileEntityMap.set(i.preview_file_id,i),(i.preview_file_previews||[]).forEach(a=>{this.previewFileMap.set(a.id,a)}),i}else return null},setCurrentPlaylist(s){const t=this.$route.params.playlist_id,i=this.playlistMap.get(t);i?(this.loading.playlist=!0,this.loadPlaylist({playlist:i,callback:(e,a)=>{e&&console.error(e),this.currentPlaylist=a,this.rebuildCurrentEntities(),this.loading.playlist=!1,s&&s()}})):(this.currentPlaylist={name:""},this.currentShots={})},addEntity(s){return this.loadEntityPreviewFiles(s).then(t=>this.addToStorePlaylistAndSave(t,s)).then(this.addToPlayerPlaylist).catch(t=>console.error(t))},addToStorePlaylistAndSave(s,t){return this.pushEntityToPlaylist({playlist:this.currentPlaylist,previewFiles:s,entity:{...t}})},addToPlayerPlaylist(s){const t=this.convertEntityToPlaylistFormat(s);P.set(this.currentEntities,t.id,t),this.playlistPlayer.entityList.push(t),this.$nextTick(()=>{this.playlistPlayer.scrollToRight()})},addEntityToPlaylist(s){this.currentEntities[s.id]||this.addEntity(s).then(this.playlistPlayer.scrollToRight())},removeEntity(s){this.removeEntityPreviewFromPlaylist({playlist:this.currentPlaylist,entity:s,callback:()=>{delete this.currentEntities[s.id]}})},clearCurrentPlaylist(){this.currentPlaylist={},this.currentShots={}},resetPlaylist(){this.clearCurrentPlaylist(),this.setCurrentPlaylist()},addCurrentSelection(){this.$options.silent=!0;const s=this.isAssetPlaylist?this.displayedAssets:this.displayedShots;this.addEntities([...s].reverse(),()=>{this.$options.silent=!1})},addSequence(s){if(s.length>0){const t=s[0].sequence_id,i=Array.from(this.shotMap.values()).filter(e=>e.sequence_id===t).sort(o("name")).reverse();this.$options.silent=!0,this.addEntities(i,()=>{this.$options.silent=!1})}},addAllPending(){this.$options.silent=!0,this.loading.addWeekly=!0,this.getPending(!1).then(s=>{this.addEntities(s.reverse(),()=>{this.loading.addWeekly=!1,this.$options.silent=!1})})},addDailyPending(){this.loading.addDaily=!0,this.$options.silent=!0,this.getPending(!0).then(s=>{this.addEntities(d(s).reverse(),()=>{this.loading.addDaily=!1,this.$options.silent=!1})})},addEpisodePending(){this.loading.addEpisode=!0,this.$options.silent=!0;let s=[].concat(...this.shotsByEpisode);s=d(s).reverse(),this.addEntities(s,()=>{this.loading.addEpisode=!1,this.$options.silent=!1})},addMovie(){this.loading.addMovie=!0,this.$options.silent=!0;const s=d(Array.from(this.shotMap.values()));this.addEntities(s.reverse(),()=>{this.loading.addMovie=!1,this.$options.silent=!1})},addEntities(s,t){if(s&&s.length>0){const i=s.pop();this.addEntity(i).then(()=>{this.addEntities(s,t)})}else t()},onPreviewChanged(s,t){this.changePlaylistPreview({playlist:this.currentPlaylist,entity:s,previewFileId:t})},onOrderChange(s){this.changePlaylistOrder({playlist:this.currentPlaylist,info:s})},onAnnotationChanged({preview:s,additions:t,deletions:i,updates:e}){const a=s.task_id;this.updatePreviewAnnotation({taskId:a,preview:s,additions:t,deletions:i,updates:e})},confirmBuildFilter(s){this.modals.isBuildFilterDisplayed=!1,this.$refs["search-field"].setValue(s),this.onSearchChange(s)},onSearchChange(s){s.length>1?this.isAssetPlaylist?(this.setAssetSearch(s),this.displayMoreAssets()):(this.setShotSearch(s),this.displayMoreShots()):this.isAssetPlaylist?this.setAssetSearch(""):this.setShotSearch("")},onForClientChanged(s){this.editPlaylist({data:{id:this.currentPlaylist.id,for_client:s}})},runAddPlaylist(s){const t={name:s.name,production_id:this.currentProduction.id,for_client:s.for_client,for_entity:s.for_entity,is_for_all:s.is_for_all,task_type_id:s.task_type_id};this.isTVShow&&this.currentEpisode&&(t.episode_id=this.currentEpisode.id),this.loading.editPlaylist=!0,this.errors.editPlaylist=!1,this.newPlaylist(t).then(i=>{this.$router.push(this.getPlaylistPath(i.id)),this.loading.editPlaylist=!1,this.modals.isEditDisplayed=!1}).catch(i=>{console.error(i),this.errors.editPlaylist=!0,this.loading.editPlaylist=!1})},confirmEditPlaylist(s){this.playlistToEdit.id?(s.id=this.currentPlaylist.id,this.runEditPlaylist(s)):this.runAddPlaylist(s)},runEditPlaylist(s){this.loading.editPlaylist=!0,this.errors.editPlaylist=!1,this.editPlaylist({data:{id:s.id,for_client:s.for_client,for_entity:s.for_entity,name:s.name,task_type_id:s.task_type_id},callback:(t,i)=>{t&&(this.errors.editPlaylist=!0),this.loading.editPlaylist=!1,this.modals.isEditDisplayed=!1,Object.assign(this.currentPlaylist,i)}})},goFirstPlaylist(){this.playlists.length>0?this.$router.push({name:"playlist",params:{production_id:this.currentProduction.id,playlist_id:this.playlists[0].id}}):this.$router.push(this.playlistsPath)},toggleAddEntities(){this.isAddingEntity&&this.resetPlaylist(),this.isAddingEntity=!this.isAddingEntity},onTaskTypeChanged(s){this.changePlaylistType({playlist:this.currentPlaylist,taskTypeId:s,callback:()=>{this.rebuildCurrentEntities()}})},onBodyScroll(s,t){this.$refs.entityListContent.scrollHeight-this.$refs.entityListContent.offsetHeight<t.scrollTop&&(this.isAssetPlaylist?this.displayMoreAssets():this.displayMoreShots())},resetSorting(){let s=1;["created_at","updated_at"].includes(this.currentSort)&&(s=-1),this.sortedPlaylists=[...this.playlists].sort(o(this.currentSort,s).thenBy("name"))},showAddModal(){this.playlistToEdit={name:`${n().format("YYYY-MM-DD HH:mm:ss")}`,for_client:!1},this.$refs["edit-playlist-modal"]=!0,this.modals.isEditDisplayed=!0},showEditModal(){this.playlistToEdit=this.currentPlaylist,this.modals.isEditDisplayed=!0},hideEditModal(){this.playlistToEdit={name:`${n().format("YYYY-MM-DD HH:mm:ss")}`,for_client:!1},this.modals.isEditDisplayed=!1},reloadAll(){this.loading.playlists||(this.loading.playlists=!0,this.loadShotsData(()=>{this.loadAssetsData().then(()=>(this.page=1,this.loadPlaylistsData())).then(()=>{this.loading.playlists=!1,this.resetPlaylist(),setTimeout(()=>{this.loading.playlistsInit=!1},300)})}))}},mounted(){this.$nextTick(()=>{this.reloadAll(),localStorage.getItem("playlist-sort")&&(this.currentSort=localStorage.getItem("playlist-sort")),this.resetSorting()})},watch:{$route(){this.setCurrentPlaylist()},currentPlaylist(){this.currentPlaylist.shots?(this.$options.silentMore=!1,this.isAddingEntity=Object.keys(this.currentPlaylist.shots).length===0):this.isAddingEntity=!0},currentProduction(){this.$store.commit("LOAD_PLAYLISTS_END",[]),this.reloadAll()},currentEpisode(){this.$store.commit("LOAD_PLAYLISTS_END",[]),this.currentEpisode&&this.reloadAll()},playlists(){},currentSort(){localStorage.setItem("playlist-sort",this.currentSort),this.loading.playlists=!0,this.page=1,this.loadPlaylistsData(!0).then(()=>{this.loading.playlists=!1})},isListToggled(){this.playlistPlayer.onWindowResize()},taskTypeId(){this.loadPlaylistsData(!0)}},socket:{events:{"playlist:new"(s){this.playlistMap.get(s.playlist_id)||this.refreshPlaylist(s.playlist_id)},"playlist:update"(s){},"playlist:delete"(s){this.$store.commit("DELETE_PLAYLIST_END",{id:s.playlist_id})},"build-job:new"(s){s.playlist_id===this.currentPlaylist.id&&(this.currentPlaylist.build_jobs=[{id:s.build_job_id,created_at:s.created_at,status:"running",playlist_id:this.currentPlaylist.id}].concat(this.currentPlaylist.build_jobs))},"build-job:update"(s){s.playlist_id===this.currentPlaylist.id&&M(this.currentPlaylist.build_jobs,{id:s.build_job_id,status:s.status})},"build-job:delete"(s){s.playlist_id===this.currentPlaylist.id&&(this.currentPlaylist.build_jobs=$(this.currentPlaylist.build_jobs,{id:s.build_job_id}))}}},metaInfo(){return this.isTVShow?{title:this.tvShowPageTitle}:{title:this.shortPageTitle}}};var Y=function(){var t=this,i=t._self._c;return i("div",{staticClass:"playlists page fixed-page dark"},[i("div",{staticClass:"columns"},[i("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onPlaylistListScroll,expression:"onPlaylistListScroll"}],ref:"playlistList",class:{"playlist-list-column":!0,column:!0,toggled:t.isListToggled}},[i("div",{staticClass:"flexrow top-section"},[t.isListToggled?t._e():i("combobox-task-type",{staticClass:"flexrow-item selector mb1",attrs:{"task-type-list":t.taskTypeList,label:t.$t("playlists.filter_task_type"),thin:!0},model:{value:t.taskTypeId,callback:function(e){t.taskTypeId=e},expression:"taskTypeId"}}),t.isListToggled?t._e():i("span",{staticClass:"filler"}),i("button-simple",{staticClass:"flexrow-item",staticStyle:{flex:"0"},attrs:{icon:t.isListToggled?"right":"left","is-small":""},on:{click:function(e){t.isListToggled=!t.isListToggled}}})],1),i("div",{staticClass:"flexrow"},[t.isListToggled?t._e():[i("combobox",{staticClass:"flexrow-item mb2",attrs:{label:t.$t("main.sorted_by"),options:t.sortOptions,"locale-key-prefix":"playlists.fields."},model:{value:t.currentSort,callback:function(e){t.currentSort=e},expression:"currentSort"}})]],2),(t.isCurrentUserManager||t.isCurrentUserSupervisor)&&!t.isListToggled?i("button",{key:"new-playlist-button",class:{button:!0,"is-loading":t.loading.addPlaylist},on:{click:t.showAddModal}},[i("plus-icon",{staticClass:"icon is-small"}),t._v(" "+t._s(t.$t("playlists.new_playlist"))+" ")],1):t._e(),t.loading.playlists?i("spinner",{staticClass:"mt2"}):i("div",{staticClass:"playlists"},t._l(t.playlists,function(e){return i("router-link",{key:e.id,class:{"playlist-item":!0,"for-client":e.for_client||!1,selected:e.id===t.currentPlaylist.id},style:t.playlistElementStyle(e),attrs:{to:t.getPlaylistPath(e.id)}},[t.isListToggled?i("div",{staticClass:"has-text-centered"},[i("light-entity-thumbnail",{attrs:{"preview-file-id":e.first_preview_file_id,type:"previews",width:"38px",height:"30px","max-width":"38px","max-height":"30px","empty-width":"38px","empty-height":"30px",title:e.name}})],1):i("div",[i("span",[t._v(" "+t._s(e.name)+" ")]),i("span",{staticClass:"playlist-date",attrs:{title:"last modified"}},[t._v(" "+t._s(t.$t("playlists.updated_at"))+" "+t._s(t.formatDate(e.updated_at))+" ")])])])}),1),t.errors.playlistLoading?i("error-text",{attrs:{text:"$t('playlists.loading_error')"}}):t._e()],1),t.playlists.length>0&&!t.currentPlaylist.id&&!t.loading.playlist?i("div",{staticClass:"playlist-column no-selection"},[!t.loading.playlists&&!t.loading.playlistsInit?i("div",{staticClass:"flexcolumn xyz-in",attrs:{xyz:"fade stagger"}},t._l(t.lastPlaylists,function(e){return i("router-link",{key:"recent-playlist-"+e.id,staticClass:"recent-playlist flexrow-item flexrow",attrs:{to:t.getPlaylistPath(e.id)}},[i("div",{staticClass:"has-text-centered"},[i("light-entity-thumbnail",{staticClass:"playlist-thumbnail",attrs:{"preview-file-id":e.first_preview_file_id,type:"previews",width:"auto",height:"auto","empty-height":"252px"}})],1),i("div",{staticClass:"playlist-infos flexrow"},[i("div",[i("h3",[t._v(t._s(e.name))]),t.currentSort==="created_at"?i("span",[t._v(" "+t._s(t.$t("playlists.created_at"))+" "+t._s(t.formatDate(e.created_at))+" ")]):i("span",[t._v(" "+t._s(t.$t("playlists.updated_at"))+" "+t._s(t.formatDate(e.updated_at))+" ")])]),i("span",{staticClass:"filler"}),i("div",[e.task_type_id?i("task-type-name",{attrs:{"task-type":t.taskTypeMap.get(e.task_type_id)}}):t._e()],1)])])}),1):i("spinner",{staticClass:"mt2"})],1):t.playlists.length===0?i("div",{staticClass:"playlist-column no-selection has-text-centered"},[!t.loading.playlists&&!t.loading.playlistsInit?i("div",[i("p",{staticClass:"empty-explaination"},[t._v(" "+t._s(t.$t("playlists.no_playlist"))+" ")]),t.isCurrentUserManager||t.isCurrentUserSupervisor?i("button",{key:"new-playlist-button",class:{big:!0,button:!0,"is-loading":t.loading.addPlaylist},on:{click:t.showAddModal}},[t._v(" "+t._s(t.$t("playlists.new_playlist"))+" ")]):t._e()]):i("spinner",{staticClass:"mt2"})],1):i("div",{staticClass:"playlist-column column"},[i("playlist-player",{ref:"playlist-player",attrs:{playlist:t.currentPlaylist,entities:t.currentEntities,"is-loading":t.loading.playlist,"is-adding-entity":t.isAddingEntity,"is-asset-playlist":t.isAssetPlaylist},on:{"edit-clicked":t.showEditModal,"show-add-entities":t.toggleAddEntities,"preview-changed":t.onPreviewChanged,"task-type-changed":t.onTaskTypeChanged,"playlist-deleted":function(e){return t.$router.push(t.playlistsPath)},"remove-entity":t.removeEntity,"order-change":t.onOrderChange,"annotation-changed":t.onAnnotationChanged,"for-client-changed":t.onForClientChanged,"annotations-refreshed":t.onAnnotationsRefreshed}}),(t.isCurrentUserManager||t.isCurrentUserSupervisor)&&t.isAddingEntity&&!t.loading.playlist?i("div",[i("div",{staticClass:"addition-header"},[i("div",{staticClass:"flexrow"},[i("page-subtitle",{staticClass:"flexrow-item",attrs:{text:t.addEntitiesText}}),i("span",{staticClass:"filler"}),i("a",{staticClass:"close-button",on:{click:t.toggleAddEntities}},[i("x-icon")],1)],1),i("div",{staticClass:"flexrow"},[i("search-field",{ref:"search-field",staticClass:"flexrow-item",attrs:{"can-save":!1,placeholder:t.isAssetPlaylist?"chars mode=wfa":"ex: seq01 anim=wfa"},on:{change:t.onSearchChange}}),i("button-simple",{staticClass:"flexrow-item",attrs:{title:t.$t("entities.build_filter.title"),icon:"funnel"},on:{click:function(e){t.modals.isBuildFilterDisplayed=!0}}}),t.isAddSearchVisible?i("button",{class:{button:!0,"flexrow-item":!0,"add-sequence":!0},attrs:{disabled:t.isAdditionLoading},on:{click:t.addCurrentSelection}},[t._v(" "+t._s(t.$t("playlists.add_selection"))+" ")]):t._e(),i("span",{staticClass:"filler"}),t.isAssetPlaylist?t._e():i("button",{class:{button:!0,"add-sequence":!0,"is-loading":this.loading.addDaily},attrs:{disabled:t.isAdditionLoading},on:{click:t.addDailyPending}},[t._v(" "+t._s(t.$t("playlists.build_daily"))+" ")]),t.isTVShow&&!t.isAssetPlaylist?i("button",{class:{button:!0,"add-sequence":!0,"is-loading":this.loading.addEpisode},attrs:{disabled:t.isAdditionLoading},on:{click:t.addEpisodePending}},[t._v(" "+t._s(t.$t("playlists.add_episode"))+" ")]):t.isAssetPlaylist?t._e():i("button",{class:{button:!0,"add-sequence":!0,"is-loading":this.loading.addMovie},attrs:{disabled:t.isAdditionLoading},on:{click:t.addMovie}},[t._v(" "+t._s(t.$t("playlists.add_movie"))+" ")])],1)])]):t._e(),(t.isCurrentUserManager||t.isCurrentUserSupervisor)&&t.isAddingEntity?i("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onBodyScroll,expression:"onBodyScroll"}],staticClass:"addition-section"},[t.isShotsLoading||t.isAssetsLoading?i("spinner",{key:"entity-loader",staticClass:"mt2"}):i("div",{ref:"entityListContent"},[t.isAssetPlaylist?i("div",t._l(t.displayedAssetsByType,function(e,a){return i("div",{key:"asset-type-"+a},[e.length>0?i("h2",{staticClass:"entity-group-title"},[t._v(" "+t._s(e[0].asset_type_name)+" ")]):t._e(),i("div",{staticClass:"addition-entities"},t._l(e.filter(l=>!l.canceled),function(l){return i("div",{key:l.id,class:{"addition-shot":!0,playlisted:t.currentEntities[l.id]!==void 0},on:{click:function(r){return r.preventDefault(),t.addEntityToPlaylist(l)}}},[i("light-entity-thumbnail",{attrs:{"preview-file-id":l.preview_file_id,width:"150px",height:"100px"}}),i("span",{staticClass:"playlisted-shot-name"},[t._v(t._s(l.name))])],1)}),0)])}),0):i("div",t._l(t.displayedShotsBySequence,function(e,a){return i("div",{key:"sequence-"+a},[e.length>0?i("h2",{staticClass:"entity-group-title"},[t._v(" "+t._s(e[0].sequence_name)+" "),t.isCurrentUserManager||t.isCurrentUserSupervisor?i("button",{key:"add-sequence-button-"+e[0].sequence_id,staticClass:"button",on:{click:function(l){return t.addSequence(e)}}},[t._v(" "+t._s(t.$t("playlists.add_sequence"))+" ")]):t._e()]):t._e(),i("div",{staticClass:"addition-entities"},t._l(e.filter(l=>!l.canceled),function(l){return i("div",{key:l.id,class:{"addition-shot":!0,playlisted:t.currentEntities[l.id]!==void 0},on:{click:function(r){return r.preventDefault(),t.addEntityToPlaylist(l)}}},[i("light-entity-thumbnail",{attrs:{"preview-file-id":l.preview_file_id,width:"150px",height:"100px"}}),i("div",[t.currentPlaylist.task_type_id?i("span",{style:{color:t.getTaskStatus(l).color},attrs:{title:t.getTaskStatus(l).name}},[t._v(" • ")]):t._e(),i("span",{staticClass:"playlisted-shot-name"},[t._v(t._s(l.name))])])],1)}),0)])}),0)])],1):t._e()],1)]),i("edit-playlist-modal",{ref:"edit-playlist-modal",attrs:{active:t.modals.isEditDisplayed,"is-loading":t.loading.editPlaylist,"is-error":t.errors.editPlaylist,"playlist-to-edit":t.playlistToEdit,"task-type-id":t.taskTypeId},on:{cancel:t.hideEditModal,confirm:t.confirmEditPlaylist}}),i("build-filter-modal",{ref:"build-filter-modal",attrs:{active:t.modals.isBuildFilterDisplayed,"entity-type":t.isAssetPlaylist?"asset":"shot"},on:{confirm:t.confirmBuildFilter,cancel:function(e){t.modals.isBuildFilterDisplayed=!1}}})],1)},q=[],H=h(j,Y,q,!1,null,"fa06e4a2",null,null);const R=H.exports;export{R as default};
//# sourceMappingURL=Playlist-fa0367c4.js.map