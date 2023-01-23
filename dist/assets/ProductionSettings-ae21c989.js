import{a3 as _,a as o,b as d,av as f,n,T as h,aE as T,b8 as v,bm as l,au as m,bi as r,x as i,s as y,k,at as p,Y as b,U as g,X as C,e as x,ak as P,b6 as S}from"./TaskInfo-3bc19eae.js";import{B as $}from"./BooleanCell-ee37ca05.js";import{K as w,m as A,a6 as D,a as I,e as F,n as E,a7 as L,a8 as B}from"./index-97d68077.js";import{T as N}from"./TaskStatusName-c7a0f989.js";import{S as M}from"./StatusAutomationList-bd5b261b.js";import"./BooleanRep-3bc83106.js";const R={name:"production-brief",components:{ButtonSimple:_,TextareaField:w},data(){return{brief:"",isEditing:!1,isLoading:!1,errors:{editBrief:!1}}},computed:{...o(["currentProduction"]),textarea(){return this.$refs.textarea}},mounted(){this.currentProduction&&(this.brief=this.currentProduction.description)},methods:{...d(["editProduction","setProduction"]),isEmpty(s){return!s||s.length===0},openEditing(){this.isEditing=!0,this.$nextTick(()=>{this.textarea.focus()})},async editBrief(){this.isLoading=!0;try{await this.editProduction({id:this.currentProduction.id,description:this.brief})}catch{this.errors.editBrief=!0,this.isLoading=!1;return}this.isEditing=!1,this.isLoading=!1},compileMarkdown(s){return f(s)}}};var q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"brief"},[t.isEditing?e("div",{staticClass:"box has-text-right"},[e("textarea-field",{ref:"textarea",staticClass:"editor",attrs:{"input-class":"textarea"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")||!a.ctrlKey?null:t.editBrief.apply(null,arguments)}},model:{value:t.brief,callback:function(a){t.brief=a},expression:"brief"}}),t.errors.editBrief?e("p",{staticClass:"error mt1 has-text-right"},[t._v(" "+t._s(t.$t("productions.brief.edit.errorText"))+" ")]):t._e(),e("p",[e("button-simple",{attrs:{"is-primary":!0,"is-loading":t.isLoading,disabled:t.isLoading,text:t.$t("main.save")},on:{click:t.editBrief}})],1)],1):e("div",{staticClass:"box",on:{dblclick:t.openEditing}},[t.isEmpty(t.currentProduction.description)?e("div",[e("p",[t._v(t._s(t.$t("productions.brief.empty")))])]):e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.compileMarkdown(t.currentProduction.description))}})])])},U=[],O=n(R,q,U,!1,null,"efb3a17f",null,null);const V=O.exports;const K={name:"production-parameters",components:{Combobox:h,ComboboxBoolean:A,DateField:D,FileUpload:T,TextField:I,ButtonSimple:_},data(){return{formData:null,isLoading:!1,isError:!1,isLocalTVShow:!1,productionTypeOptions:v,form:{name:"",start_date:new Date,end_date:new Date,nb_episodes:0,episode_span:0,fps:"",max_retakes:0,is_clients_isolated:"false",ratio:"",resolution:"",production_type:"short"}}},computed:{...o(["currentProduction","productionAvatarFormData","productionStatus","isTVShow"])},mounted(){this.resetForm()},watch:{currentProduction:{handler(){this.resetForm(),this.updateTvShowRelatedDatas(this.isTVShow)},deep:!0},"form.production_type"(s){this.updateTvShowRelatedDatas(s==="tvshow")}},methods:{...d(["editProduction","storeProductionPicture","uploadProductionAvatar"]),onFileSelected(s){this.formData=s,this.storeProductionPicture(s)},isEmpty(s){return!s||s.length===0},runConfirmation(){this.$emit("confirm",this.form)},updateTvShowRelatedDatas(s){this.isLocalTVShow=s,s&&this.currentProduction?(this.form.nb_episodes=this.currentProduction.nb_episodes,this.form.episode_span=this.currentProduction.episode_span):(this.form.nb_episodes=0,this.form.episode_span=0)},resetForm(){this.currentProduction?this.form={name:this.currentProduction.name,start_date:l(this.currentProduction.start_date).toDate(),end_date:l(this.currentProduction.end_date).toDate(),production_type:this.currentProduction.production_type||"short",episode_span:this.currentProduction.episode_span,fps:this.currentProduction.fps,max_retakes:this.currentProduction.max_retakes,nb_episodes:this.currentProduction.nb_episodes,is_clients_isolated:this.currentProduction.is_clients_isolated?"true":"false",ratio:this.currentProduction.ratio,resolution:this.currentProduction.resolution}:this.form={name:"",start_date:new Date,end_date:new Date,production_type:"short",nb_episodes:0,episode_span:0,max_retakes:0,is_clients_isolated:"false",fps:"",ratio:"",resolution:""}},async editParameters(){this.isLoading=!0;try{await this.editProduction({id:this.currentProduction.id,...this.form,start_date:m(this.form.start_date),end_date:m(this.form.end_date)}),this.productionAvatarFormData&&await this.uploadProductionAvatar(this.currentProduction.id)}catch{this.isLoading=!1,this.isError=!0;return}this.isLoading=!1}}};var j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-one-third box"},[e("form",{staticClass:"form",on:{submit:function(a){a.preventDefault()}}},[e("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameField",attrs:{label:t.$t("productions.fields.name")},on:{enter:t.runConfirmation},model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}}),e("div",{staticClass:"columns"},[e("div",{staticClass:"mr1"},[e("date-field",{ref:"startDateField",attrs:{label:t.$t("productions.fields.start_date"),"short-date":!0},model:{value:t.form.start_date,callback:function(a){t.$set(t.form,"start_date",a)},expression:"form.start_date"}})],1),e("div",[e("date-field",{ref:"endDateField",attrs:{label:t.$t("productions.fields.end_date"),"short-date":!0},model:{value:t.form.end_date,callback:function(a){t.$set(t.form,"end_date",a)},expression:"form.end_date"}})],1)]),e("combobox",{ref:"productionTypeField",attrs:{localeKeyPrefix:"productions.type.",label:t.$t("productions.fields.type"),options:t.productionTypeOptions},on:{enter:t.runConfirmation},model:{value:t.form.production_type,callback:function(a){t.$set(t.form,"production_type",a)},expression:"form.production_type"}}),t.currentProduction&&t.currentProduction.id&&t.isLocalTVShow?e("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nbEpisodesField",attrs:{label:t.$t("productions.fields.nb_episodes")},on:{enter:t.runConfirmation},model:{value:t.form.nb_episodes,callback:function(a){t.$set(t.form,"nb_episodes",a)},expression:"form.nb_episodes"}}):t._e(),t.currentProduction&&t.currentProduction.id?e("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"fpsField",attrs:{label:t.$t("productions.fields.fps")},on:{enter:t.runConfirmation},model:{value:t.form.fps,callback:function(a){t.$set(t.form,"fps",a)},expression:"form.fps"}}):t._e(),t.currentProduction&&t.currentProduction.id?e("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"ratioField",attrs:{label:t.$t("productions.fields.ratio")},on:{enter:t.runConfirmation},model:{value:t.form.ratio,callback:function(a){t.$set(t.form,"ratio",a)},expression:"form.ratio"}}):t._e(),t.currentProduction&&t.currentProduction.id?e("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"resolutionField",attrs:{label:t.$t("productions.fields.resolution")},on:{enter:t.runConfirmation},model:{value:t.form.resolution,callback:function(a){t.$set(t.form,"resolution",a)},expression:"form.resolution"}}):t._e(),t.currentProduction&&t.currentProduction.id?e("combobox-boolean",{directives:[{name:"focus",rawName:"v-focus"}],ref:"isClientsIsolatedField",attrs:{label:t.$t("productions.fields.is_clients_isolated")},on:{enter:t.runConfirmation},model:{value:t.form.is_clients_isolated,callback:function(a){t.$set(t.form,"is_clients_isolated",a)},expression:"form.is_clients_isolated"}}):t._e(),t.currentProduction&&t.currentProduction.id?e("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"maxRetakesField",attrs:{type:"number",step:1,label:t.$t("productions.fields.max_retakes")},on:{enter:t.runConfirmation},model:{value:t.form.max_retakes,callback:function(a){t.$set(t.form,"max_retakes",a)},expression:"form.max_retakes"}}):t._e(),t.currentProduction&&t.currentProduction.id?e("div",[e("label",{staticClass:"label"},[t._v(t._s(t.$t("productions.picture")))]),e("file-upload",{ref:"fileField",attrs:{"is-primary":!1,label:t.$t("main.csv.upload_file"),accept:".png,.jpg,.jpeg"},on:{fileselected:t.onFileSelected}})],1):t._e(),t.isError?e("p",{staticClass:"error mt1"},[t._v(" "+t._s(t.$t("productions.edit_error"))+" ")]):t._e(),e("div",{staticClass:"has-text-right mt2"},[e("button-simple",{class:{"is-loading":t.isLoading},attrs:{"is-primary":!0,disabled:t.isLoading,text:t.$t("main.save")},on:{click:t.editParameters}})],1)],1)])])},Y=[],z=n(K,j,Y,!1,null,"12201686",null,null);const G=z.exports;const H={name:"production-task-type",components:{TaskTypeCell:F},props:{taskType:{required:!0,type:Object},scheduleItem:{required:!0,type:Object}},data(){return{startDate:null,endDate:null,silent:!0}},computed:{...o(["currentProduction","getTaskTypePriority"]),productionTimeRange(){return{to:r(this.currentProduction.start_date).toDate(),from:r(this.currentProduction.end_date).toDate()}},endDateTimeRange(){return{to:this.startDate,from:r(this.currentProduction.end_date).toDate()}}},mounted(){this.startDate=r(this.scheduleItem.start_date).toDate(),this.endDate=r(this.scheduleItem.end_date).toDate(),this.$nextTick(()=>{this.silent=!1})},methods:{...d([])},watch:{startDate(){if(this.silent)return;const s=i(this.startDate);let t=i(this.endDate);this.silent=!0,t.isBefore(s)&&(t=s.clone().add(1,"days"),this.endDate=t.toDate());const e={...this.scheduleItem};e.startDate=s,e.endDate=t,this.$emit("date-changed",e),this.$nextTick(()=>{this.silent=!1})},endDate(){if(this.silent)return;let s=i(this.startDate);const t=i(this.endDate);this.silent=!0,t.isBefore(s)&&(s=t.clone().add(-1,"days"),this.startDate=s.toDate());const e={...this.scheduleItem};e.startDate=s,e.endDate=t,this.$emit("date-changed",e),this.$nextTick(()=>{this.silent=!1})},scheduleItem(){this.silent=!0,this.startDate=r(this.scheduleItem.start_date).toDate(),this.endDate=r(this.scheduleItem.end_date).toDate(),this.$nextTick(()=>{this.silent=!1})}}};var X=function(){var t=this,e=t._self._c;return e("tr",{key:t.taskType.id,staticClass:"datatable-row"},[e("task-type-cell",{attrs:{"task-type":t.taskType}}),e("td",{staticClass:"remove"},[e("button",{staticClass:"button",on:{click:function(a){return t.$emit("remove",{scheduleItem:t.scheduleItem,taskType:t.taskType})}}},[t._v(" "+t._s(t.$t("main.remove"))+" ")])])],1)},J=[],Q=n(H,X,J,!1,null,"b5ec8e4e",null,null);const W=Q.exports;const Z={name:"production-task-types",components:{ComboboxTaskType:E,draggable:L,ProductionTaskType:W},data(){return{assetTaskTypes:{list:[]},editTaskTypes:{list:[]},episode_span:0,episodeTaskTypes:{list:[]},sequenceTaskTypes:{list:[]},shotTaskTypes:{list:[]},taskTypeId:"",loading:{episode_span:!1,scheduleTimeUpdate:!1,scheduleTimeDelete:!1},errors:{episode_span:!1,scheduleTimeUpdate:!1,delete:!1}}},mounted(){this.remainingTaskTypes.length>0&&(this.taskTypeId=this.remainingTaskTypes[0].id),this.resetDisplayedTaskTypes(),this.currentProduction&&(this.episode_span=this.currentProduction.episode_span,this.loadAllScheduleItems(this.currentProduction).then(()=>{this.resetDisplayedTaskTypes()}).catch(s=>{console.error(s)}))},computed:{...o(["currentProduction","currentScheduleItems","productionTaskTypes","productionAssetTaskTypes","productionShotTaskTypes","productionEditTaskTypes","productionSequenceTaskTypes","productionEpisodeTaskTypes","taskStatusMap","taskTypeMap","taskTypes","isTVShow"]),remainingTaskTypes(){return y(this.taskTypes.filter(s=>!this.currentProduction.task_types.includes(s.id)))}},methods:{...d(["addTaskTypeToProduction","createScheduleItem","deleteScheduleItem","editProduction","editTaskTypeLink","loadAllScheduleItems","loadContext","removeTaskTypeFromProduction","saveScheduleItem"]),isEmpty(s){return!s||s.length===0},resetDisplayedTaskTypes(){["Asset","Shot","Sequence","Episode","Edit"].forEach(s=>{const t=this[`production${s}TaskTypes`];let e=k([...t],this.currentProduction);e=e.map(a=>({taskType:a,scheduleItem:this.getScheduleItemForTaskType(a)})),this[`${s.toLowerCase()}TaskTypes`]={title:this.$t(`${s.toLowerCase()}s.title`),list:e}})},getScheduleItemForTaskType(s){return this.currentScheduleItems.find(e=>e.task_type_id===s.id)||{start_date:p(i()),end_date:p(i())}},async addTaskType(){await this.addTaskTypeToProduction({taskTypeId:this.taskTypeId,priority:this.assetTaskTypes.length}),await this.createScheduleItem({startDate:i(),endDate:i(),project_id:this.currentProduction.id,task_type_id:this.taskTypeId}),this.remainingTaskTypes.length>0?this.taskTypeId=this.remainingTaskTypes[0].id:this.taskTypeId="",this.resetDisplayedTaskTypes()},async removeTaskType({taskType:s,scheduleItem:t}){this.errors.delete=!1;try{await this.removeTaskTypeFromProduction(s.id),t!==null&&(this.loading.scheduleTimeDelete=!0,await this.deleteScheduleItem(t),this.loading.scheduleTimeDelete=!1)}catch{this.errors.delete=!0,this.loading.scheduleTimeDelete=!1;return}await this.$nextTick(),this.remainingTaskTypes.length>0&&(this.taskTypeId=this.remainingTaskTypes[0].id),this.resetDisplayedTaskTypes()},async editEpisodeSpan(){this.loading.episode_span=!0,this.errors.episode_span=!1;try{await this.editProduction({id:this.currentProduction.id,episode_span:this.episode_span})}catch(s){this.errors.episode_span=!0,console.error(s)}this.loading.episode_span=!1},async onDateChanged(s){this.errors.scheduleTimeUpdate=!1;try{await this.saveScheduleItem(s)}catch(t){console.error(t),this.errors.scheduleTimeUpdate=!0}},async savePriorities(s){const t=new Date().getTime();this.lastCall=this.lastCall||0,t-this.lastCall>1e3&&!this.isSaving?(this.lastCall=t,this.isSaving=!0,await B.series(s.map(async e=>await this.editTaskTypeLink(e))),this.isSaving=!1,this.newSaveCall&&await this.savePriorities(s),setTimeout(()=>{this.$store.commit("SORT_VALIDATION_COLUMNS",this.taskTypeMap)},100)):this.newSaveCall=!0},async updatePriorities(s){const t=[];s.forEach((e,a)=>{a+=1;const u={projectId:this.currentProduction.id,taskTypeId:e.taskType.id,priority:a};t.push(u)}),await this.savePriorities(t),await this.loadContext()}},watch:{currentProduction:{handler(){this.episode_span=this.currentProduction.episode_span,this.loadAllScheduleItems(this.currentProduction),this.resetDisplayedTaskTypes()},deep:!0}}};var tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[t.remainingTaskTypes.length>0?[e("div",{staticClass:"flexrow mt1 mb1 add-task-type"},[e("combobox-task-type",{staticClass:"flexrow-item selector",attrs:{"task-type-list":t.remainingTaskTypes},model:{value:t.taskTypeId,callback:function(a){t.taskTypeId=a},expression:"taskTypeId"}}),e("button",{staticClass:"button flexrow-item",attrs:{disabled:t.loading.scheduleTimeDelete},on:{click:t.addTaskType}},[t._v(" "+t._s(t.$t("main.add"))+" ")])],1)]:t._e(),t.errors.delete||t.errors.scheduleTimeUpdate?e("p",{staticClass:"error mt1 mb1"},[t._v(" "+t._s(t.$t("productions.edit_error"))+" ")]):t._e(),t.isEmpty(t.currentProduction.task_types)?e("div",{staticClass:"box"},[t._v(" "+t._s(t.$t("settings.production.empty_list"))+" ")]):t._l([t.assetTaskTypes,t.shotTaskTypes,t.editTaskTypes,t.sequenceTaskTypes,t.episodeTaskTypes],function(a,u){return[e("div",{key:u},[e("h2",{staticClass:"section-title"},[t._v(" "+t._s(a.title)+" ")]),a.list.length>0?e("table",{staticClass:"datatable list"},[e("thead",[e("tr",[e("th",{staticClass:"name"},[t._v(" "+t._s(t.$t("task_types.fields.name"))+" ")]),e("th",{staticClass:"remove"})])]),e("draggable",{staticClass:"datatable-body",attrs:{draggable:".task-type",tag:"tbody"},on:{end:function(c){return t.updatePriorities(a.list)}},model:{value:a.list,callback:function(c){t.$set(a,"list",c)},expression:"taskListObject.list"}},t._l(a.list,function(c){return e("production-task-type",{key:c.taskType.id,staticClass:"task-type",attrs:{"task-type":c.taskType,"schedule-item":c.scheduleItem},on:{"date-changed":t.onDateChanged,remove:t.removeTaskType}})}),1)],1):t._e()])]})],2)])},et=[],st=n(Z,tt,et,!1,null,"ce07b80e",null,null);const at=st.exports;const it={name:"status-automation-item",components:{TaskTypeName:b,TaskStatusName:N},props:{statusAutomation:{type:Object,default:null},productionId:{type:String,default:null},deletable:{type:Boolean,default:!1}},computed:{...o(["isCurrentUserClient","getTaskStatus","getTaskType"]),statusAutomationPath(){const s={name:"status-automation",params:{production_id:this.productionId,status_automation_id:this.statusAutomation.id,type:this.$tc(this.statusAutomation.for_entity.toLowerCase(),2)}};return(this.statusAutomation.episode_id||this.$route.params.episode_id)&&(s.name="episode-status-automation",s.params.episode_id=this.statusAutomation.episode_id||this.$route.params.episode_id),s}},methods:{...d([])}};var ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"status-automation flexrow"},[e("span",{staticClass:"flexrow-item entity-type"},[t._v(" "+t._s(t.statusAutomation.entity_type)+" ")]),e("span",{staticClass:"in-task-type flexrow-item"},[e("task-type-name",{staticClass:"in-task-type flexrow-item",attrs:{"task-type":t.getTaskType(t.statusAutomation.in_task_type_id)}})],1),e("span",{staticClass:"in-task-status flexrow-item"},[t.statusAutomation.in_field_type!=="ready_for"?e("task-status-name",{attrs:{entry:t.getTaskStatus(t.statusAutomation.in_task_status_id)}}):t._e()],1),e("span",{staticClass:"flexrow-item trigger-type"},[t._v(" changes "+t._s(t.statusAutomation.out_field_type==="ready_for"?"ready for to":"task status for")+" ")]),e("span",{staticClass:"out-task-type flexrow-item"},[e("task-type-name",{attrs:{"task-type":t.getTaskType(t.statusAutomation.out_task_type_id)}})],1),t.statusAutomation.out_field_type==="status"?e("span",{staticClass:"flexrow-item"},[t._v(" to ")]):t._e(),e("span",{staticClass:"out-task-status flexrow-item"},[t.statusAutomation.out_field_type==="status"?e("task-status-name",{attrs:{entry:t.getTaskStatus(t.statusAutomation.out_task_status_id)}}):t._e()],1)])},nt=[],rt=n(it,ot,nt,!1,null,"2dd68986",null,null);const dt=rt.exports;const ut={name:"combobox-status-automation",components:{ChevronDownIcon:g,ComboboxMask:C,StatusAutomationItem:dt},data(){return{showStatusAutomationsList:!1}},props:{label:{default:"",type:String},statusAutomationsList:{default:()=>[],type:Array},value:{default:"",type:String},narrow:{default:!1,type:Boolean},withMargin:{default:!0,type:Boolean},addPlaceholder:{default:!1,type:Boolean}},mounted(){this.selectedStatusAutomation=this.statusAutomation},computed:{...o(["isDarkTheme","statusAutomationMap","getTaskStatus","getTaskType"]),currentStatusAutomation(){return this.value?this.statusAutomationMap.get(this.value):this.addPlaceholder?{short_name:"+ status",color:"#999"}:this.statusAutomationsList[0]}},methods:{selectStatusAutomation(s){this.$emit("input",s.id),this.showStatusAutomationsList=!1},backgroundColor(s){return(!s||s.is_default)&&!this.isDarkTheme?"#ECECEC":(!s||s.is_default)&&this.isDarkTheme?"#5F626A":this.isDarkTheme?x.darkenColor(s.color):s.color},color(s){return!s||!s.is_default||this.isDarkTheme?"white":"#333"},toggleStatusAutomationsList(){this.showStatusAutomationsList=!this.showStatusAutomationsList}}};var ct=function(){var t=this,e=t._self._c;return e("div",{class:{field:t.withMargin,"field--narrow":t.narrow}},[t.label.length>0?e("label",{staticClass:"label"},[t._v(" "+t._s(t.label)+" ")]):t._e(),e("div",{staticClass:"status-automation-combo"},[e("div",{staticClass:"flexrow",on:{click:t.toggleStatusAutomationsList}},[e("div",{staticClass:"selected-status-automation-line flexrow-item"},[t.currentStatusAutomation?e("status-automation-item",{attrs:{"status-automation":t.currentStatusAutomation}}):t._e()],1),e("chevron-down-icon",{staticClass:"down-icon flexrow-item"})],1),t.showStatusAutomationsList?e("div",{ref:"select",staticClass:"select-input"},t._l(t.statusAutomationsList,function(a){return e("div",{key:a.id,staticClass:"status-automation-line",on:{click:function(u){return t.selectStatusAutomation(a)}}},[a?e("status-automation-item",{attrs:{"status-automation":a}}):t._e()],1)}),0):t._e()]),e("combobox-mask",{attrs:{displayed:t.showStatusAutomationsList},on:{click:t.toggleStatusAutomationsList}})],1)},lt=[],mt=n(ut,ct,lt,!1,null,"c0cdbda2",null,null);const pt=mt.exports;const _t={name:"production-status-automations",components:{ComboboxStatusAutomation:pt,StatusAutomationList:M},data(){return{statusAutomations:[],statusAutomationId:""}},mounted(){this.remainingStatusAutomations.length>0&&(this.statusAutomationId=this.remainingStatusAutomations[0].id)},computed:{...o(["currentProduction","productionStatusAutomations","statusAutomationMap","remainingStatusAutomations"])},methods:{...d(["addStatusAutomationToProduction"]),isEmpty(s){return!s||s.length===0},addStatusAutomation(){this.addStatusAutomationToProduction(this.statusAutomationId),this.remainingStatusAutomations.length>0?this.statusAutomationId=this.remainingStatusAutomations[0].id:this.statusAutomationId=""}},watch:{}};var ht=function(){var t=this,e=t._self._c;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[t.remainingStatusAutomations.length>0?[t.remainingStatusAutomations?e("div",{staticClass:"flexrow mt1 mb1 add-status-automation"},[e("combobox-status-automation",{staticClass:"flexrow-item selector",attrs:{"status-automations-list":t.remainingStatusAutomations},model:{value:t.statusAutomationId,callback:function(a){t.statusAutomationId=a},expression:"statusAutomationId"}}),e("button",{staticClass:"button flexrow-item",on:{click:t.addStatusAutomation}},[t._v(" "+t._s(t.$t("main.add"))+" ")])],1):t._e()]:t._e(),t.isEmpty(t.productionStatusAutomations)?e("div",{staticClass:"box"},[t._v(" "+t._s(t.$t("settings.production.empty_automation_list"))+" ")]):t._e(),t.isEmpty(t.productionStatusAutomations)?t._e():e("status-automation-list",{attrs:{entries:t.productionStatusAutomations}})],2)])},ft=[],Tt=n(_t,ht,ft,!1,null,"164ae1ef",null,null);const vt=Tt.exports;const yt={name:"production-settings",components:{BooleanCell:$,Combobox:h,ComboboxStatus:P,ProductionBrief:V,ProductionParameters:G,ProductionTaskTypes:at,ProductionStatusAutomations:vt,ValidationTag:S},data(){return{activeTab:"brief",assetTypeId:"",taskStatusId:""}},mounted(){this.remainingAssetTypes.length>0&&(this.assetTypeId=this.remainingAssetTypes[0].value),this.remainingTaskStatuses.length>0&&(this.taskStatusId=this.remainingTaskStatuses[0].id),this.$route.query.tab&&(this.activeTab=this.$route.query.tab)},computed:{...o(["assetTypeMap","currentProduction","assetTypes","productionAssetTypes","productionTaskTypes","productionTaskStatuses","productionStatusAutomations","taskStatus","taskStatusMap","taskTypeMap","taskTypes","isTVShow"]),remainingAssetTypes(){return this.assetTypes.filter(s=>!this.currentProduction.asset_types.includes(s.id)).map(s=>({label:s.name,value:s.id}))},remainingTaskStatuses(){return this.taskStatus.filter(s=>!this.currentProduction.task_statuses.includes(s.id))}},methods:{...d(["addAssetTypeToProduction","addTaskStatusToProduction","removeAssetTypeFromProduction","removeTaskStatusFromProduction"]),isEmpty(s){return!s||s.length===0},isActiveTab(s){return this.activeTab===s},addAssetType(){this.addAssetTypeToProduction(this.assetTypeId),this.remainingAssetTypes.length>0&&(this.assetTypeId=this.remainingAssetTypes[0].value)},removeAssetType(s){this.removeAssetTypeFromProduction(s)},addTaskStatus(){this.addTaskStatusToProduction(this.taskStatusId),this.remainingTaskStatuses.length>0?this.taskStatusId=this.remainingTaskStatuses[0].id:this.taskStatusId=""},async removeTaskStatus(s){await this.removeTaskStatusFromProduction(s),await this.$nextTick(),this.remainingTaskStatuses.length>0&&(this.taskStatusId=this.remainingTaskStatuses[0].id)},getBooleanTranslation(s){return s?this.$t("main.yes"):this.$t("main.no")}},watch:{activeTab(){this.$route.query.tab!==this.activeTab&&this.$router.push({query:{tab:this.activeTab}})}},metaInfo(){return{title:`${this.currentProduction.name} | ${this.$t("settings.title")} - Kitsu`}}};var kt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"production-settings fixed-page"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"tabs"},[e("ul",[e("li",{class:{"is-active":t.isActiveTab("brief")}},[e("a",{on:{click:function(a){t.activeTab="brief"}}},[t._v(" "+t._s(t.$t("productions.brief.title"))+" ")])]),e("li",{class:{"is-active":t.isActiveTab("parameters")}},[e("a",{on:{click:function(a){t.activeTab="parameters"}}},[t._v(" "+t._s(t.$t("productions.parameters.title"))+" ")])]),e("li",{class:{"is-active":t.isActiveTab("taskStatus")}},[e("a",{on:{click:function(a){t.activeTab="taskStatus"}}},[t._v(" "+t._s(t.$t("task_status.title"))+" ")])]),e("li",{class:{"is-active":t.isActiveTab("taskTypes")}},[e("a",{on:{click:function(a){t.activeTab="taskTypes"}}},[t._v(" "+t._s(t.$t("task_types.title"))+" ")])]),e("li",{class:{"is-active":t.isActiveTab("assetTypes")}},[e("a",{on:{click:function(a){t.activeTab="assetTypes"}}},[t._v(" "+t._s(t.$t("asset_types.title"))+" ")])]),e("li",{class:{"is-active":t.isActiveTab("statusAutomations")}},[e("a",{on:{click:function(a){t.activeTab="statusAutomations"}}},[t._v(" "+t._s(t.$t("status_automations.title"))+" ")])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("brief"),expression:"isActiveTab('brief')"}],staticClass:"tab"},[e("ProductionBrief")],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("parameters"),expression:"isActiveTab('parameters')"}],staticClass:"tab"},[e("production-parameters")],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("assetTypes"),expression:"isActiveTab('assetTypes')"}],staticClass:"tab"},[e("div",{staticClass:"flexrow mt1 mb1 add-asset-type"},[e("combobox",{staticClass:"flexrow-item",attrs:{options:t.remainingAssetTypes},model:{value:t.assetTypeId,callback:function(a){t.assetTypeId=a},expression:"assetTypeId"}}),e("button",{staticClass:"button flexrow-item",on:{click:t.addAssetType}},[t._v(" "+t._s(t.$t("main.add"))+" ")])],1),t.isEmpty(t.currentProduction.asset_types)?e("div",{staticClass:"box"},[t._v(" "+t._s(t.$t("settings.production.empty_list"))+" ")]):e("table",{staticClass:"datatable list"},[e("tbody",{staticClass:"datatable-body"},t._l(t.productionAssetTypes,function(a){return e("tr",{key:a.id,staticClass:"datatable-row"},[e("td",{staticClass:"name"},[t._v(t._s(a.name))]),e("td",[e("button",{staticClass:"button",on:{click:function(u){return t.removeAssetType(a.id)}}},[t._v(" "+t._s(t.$t("main.remove"))+" ")])])])}),0)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("taskTypes"),expression:"isActiveTab('taskTypes')"}],staticClass:"tab"},[e("production-task-types")],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("taskStatus"),expression:"isActiveTab('taskStatus')"}],staticClass:"tab"},[t.isEmpty(t.remainingTaskStatuses)?t._e():e("div",{staticClass:"flexrow mt1 mb1 add-task-status"},[e("combobox-status",{staticClass:"flexrow-item selector",attrs:{"task-status-list":t.remainingTaskStatuses},model:{value:t.taskStatusId,callback:function(a){t.taskStatusId=a},expression:"taskStatusId"}}),e("button",{staticClass:"button flexrow-item",on:{click:t.addTaskStatus}},[t._v(" "+t._s(t.$t("main.add"))+" ")])],1),t.isEmpty(t.currentProduction.task_statuses)?e("div",{staticClass:"box"},[t._v(" "+t._s(t.$t("settings.production.empty_list"))+" ")]):e("table",{staticClass:"datatable"},[e("thead",[e("tr",[e("th",{staticClass:"th-name"},[t._v(t._s(t.$t("task_status.fields.name")))]),e("th",{staticClass:"th-short-name"},[t._v(t._s(t.$t("task_status.fields.short_name")))]),e("th",{staticClass:"th-bool"},[t._v(t._s(t.$t("task_status.fields.is_done")))]),e("th",{staticClass:"th-bool"},[t._v(t._s(t.$t("task_status.fields.is_retake")))]),e("th",{staticClass:"th-bool"},[t._v(t._s(t.$t("task_status.fields.is_artist_allowed")))]),e("th",{staticClass:"th-bool"},[t._v(t._s(t.$t("task_status.fields.is_client_allowed")))])])]),e("tbody",{staticClass:"datatable-body"},[t._l(t.productionTaskStatuses,function(a){return[a?e("tr",{key:a.id,staticClass:"datatable-row"},[e("td",[t._v(" "+t._s(a.name)+" ")]),e("td",{staticClass:"name"},[e("validation-tag",{attrs:{"is-static":!0,task:{task_status_id:a.id}}})],1),e("boolean-cell",{attrs:{value:a.is_done}}),e("boolean-cell",{attrs:{value:a.is_retake}}),e("boolean-cell",{attrs:{value:a.is_artist_allowed}}),e("boolean-cell",{attrs:{value:a.is_client_allowed}}),e("td",[e("button",{staticClass:"button",on:{click:function(u){return t.removeTaskStatus(a.id)}}},[t._v(" "+t._s(t.$t("main.remove"))+" ")])])],1):t._e()]})],2)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("statusAutomations"),expression:"isActiveTab('statusAutomations')"}],staticClass:"tab"},[e("production-status-automations")],1)])])},bt=[],gt=n(yt,kt,bt,!1,null,"c9104fc0",null,null);const At=gt.exports;export{At as default};
//# sourceMappingURL=ProductionSettings-ae21c989.js.map