import{h as n,K as d,j as c,M as u,k as _,m as i,g as l,n as o,f,R as m,T as k,o as h}from"./index-a3f257ca.js";import{B as v}from"./BooleanField-eab77e05.js";import{L as b}from"./ListPageHeader-59bdad44.js";import{R as p}from"./RouteTabs-682f1400.js";import{B as $}from"./BooleanCell-eb0416ec.js";import{T as C}from"./TaskStatusCell-43e25f51.js";const S={name:"edit-task-status-modal",mixins:[n],components:{BooleanField:v,ColorField:d,ComboboxBoolean:c,ModalFooter:u,TextField:_},props:{active:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},taskStatusToEdit:{type:Object,default:()=>{}}},data(){return{form:{name:"",short_name:"",color:"$grey999",is_done:"false",is_feedback_request:"false",is_default:"false",archived:"false"},isRetakeOptions:[{label:this.$t("main.yes"),value:"true"},{label:this.$t("main.no"),value:"false"}],isDoneOptions:[{label:this.$t("main.yes"),value:"true"},{label:this.$t("main.no"),value:"false"}],isArtistAllowedOptions:[{label:this.$t("main.yes"),value:"true"},{label:this.$t("main.no"),value:"false"}],colors:["#999999","#CCCCCC","#CC9999","#FF3860","#E81123","#E74C3C","#FF5722","#FF7043","#FFA000","#FBC02D","#AFB42B","#8BC34A","#66BB6A","#22D160","#4DB6AC","#03A9F4","#3273DC","#3498DB","#2980B9","#607D8B","#8764B8","#AB26FF","#E040FB","#FF80AB"]}},computed:{...i(["taskStatus","taskStatusStatusOptions"]),isEditing(){return this.taskStatusToEdit&&this.taskStatusToEdit.id}},methods:{...l([]),confirmClicked(){this.$emit("confirm",this.form)},resetForm(){this.taskStatusToEdit&&(this.form={name:this.taskStatusToEdit.name,short_name:this.taskStatusToEdit.short_name,color:this.taskStatusToEdit.color,is_done:String(this.taskStatusToEdit.is_done),is_retake:String(this.taskStatusToEdit.is_retake||!1),is_artist_allowed:String(this.taskStatusToEdit.is_artist_allowed),is_client_allowed:String(this.taskStatusToEdit.is_client_allowed),is_default:String(this.taskStatusToEdit.is_default||!1),is_feedback_request:String(this.taskStatusToEdit.is_feedback_request||!1),archived:String(this.taskStatusToEdit.archived||!1)})}},watch:{taskStatusToEdit(){this.resetForm()},active(){this.active&&(this.resetForm(),setTimeout(()=>{var a;(a=this.$refs.nameField)==null||a.focus()},100))}}};var T=function(){var t=this,s=t._self._c;return s("div",{class:{modal:!0,"is-active":t.active}},[s("div",{staticClass:"modal-background",on:{click:function(e){return t.$emit("cancel")}}}),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"box"},[t.isEditing?s("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("task_status.edit_title"))+" "+t._s(t.taskStatusToEdit.name)+" ")]):s("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("task_status.new_task_status"))+" ")]),s("form",{on:{submit:function(e){e.preventDefault()}}},[t.taskStatusToEdit.short_name!=="todo"?s("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameField",attrs:{"input-class":"task-status-name",label:t.$t("task_status.fields.name")},on:{enter:t.confirmClicked},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}):t._e(),t.taskStatusToEdit.short_name!=="todo"?s("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"shortNameField",attrs:{"input-class":"task-status-short-name",label:t.$t("task_status.fields.short_name"),maxlength:8},on:{enter:t.confirmClicked},model:{value:t.form.short_name,callback:function(e){t.$set(t.form,"short_name",e)},expression:"form.short_name"}}):t._e(),s("boolean-field",{attrs:{label:t.$t("task_status.fields.is_default")},on:{enter:t.confirmClicked},model:{value:t.form.is_default,callback:function(e){t.$set(t.form,"is_default",e)},expression:"form.is_default"}}),t.form.is_default==="false"?s("boolean-field",{attrs:{label:t.$t("task_status.fields.is_done")},on:{enter:t.confirmClicked},model:{value:t.form.is_done,callback:function(e){t.$set(t.form,"is_done",e)},expression:"form.is_done"}}):t._e(),t.form.is_default==="false"?s("boolean-field",{attrs:{label:t.$t("task_status.fields.is_retake")},on:{enter:t.confirmClicked},model:{value:t.form.is_retake,callback:function(e){t.$set(t.form,"is_retake",e)},expression:"form.is_retake"}}):t._e(),s("boolean-field",{attrs:{label:t.$t("task_status.fields.is_artist_allowed")},on:{enter:t.confirmClicked},model:{value:t.form.is_artist_allowed,callback:function(e){t.$set(t.form,"is_artist_allowed",e)},expression:"form.is_artist_allowed"}}),s("boolean-field",{attrs:{label:t.$t("task_status.fields.is_client_allowed")},on:{enter:t.confirmClicked},model:{value:t.form.is_client_allowed,callback:function(e){t.$set(t.form,"is_client_allowed",e)},expression:"form.is_client_allowed"}}),t.form.is_default==="false"?s("boolean-field",{attrs:{label:t.$t("task_status.fields.is_feedback_request")},on:{enter:t.confirmClicked},model:{value:t.form.is_feedback_request,callback:function(e){t.$set(t.form,"is_feedback_request",e)},expression:"form.is_feedback_request"}}):t._e(),t.taskStatusToEdit.short_name!=="todo"?s("color-field",{ref:"colorField",attrs:{label:t.$t("task_status.fields.color"),colors:t.colors},model:{value:t.form.color,callback:function(e){t.$set(t.form,"color",e)},expression:"form.color"}}):t._e(),t.isEditing?s("combobox-boolean",{attrs:{label:t.$t("main.archived")},on:{enter:t.confirmClicked},model:{value:t.form.archived,callback:function(e){t.$set(t.form,"archived",e)},expression:"form.archived"}}):t._e()],1),s("modal-footer",{attrs:{"error-text":t.$t("task_status.create_error"),"is-error":t.isError,"is-loading":t.isLoading},on:{confirm:t.confirmClicked,cancel:function(e){return t.$emit("cancel")}}})],1)])])},g=[],E=o(S,T,g,!1,null,"214e74d5",null,null);const w=E.exports;const x={name:"task-status-list",mixins:[f],props:{entries:{type:Array,default:()=>[]},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},data(){return{}},components:{BooleanCell:$,RowActionsCell:m,TableInfo:k,TaskStatusCell:C},computed:{...i([])},methods:{...l([])}};var F=function(){var t=this,s=t._self._c;return s("div",{staticClass:"data-list"},[s("div",{staticClass:"datatable-wrapper"},[s("table",{staticClass:"datatable"},[s("thead",{staticClass:"datatable-head"},[s("tr",[s("th",{staticClass:"name",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("task_status.fields.name"))+" ")]),s("th",{staticClass:"short-name",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("task_status.fields.short_name"))+" ")]),s("th",{staticClass:"is-default",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("task_status.fields.is_default"))+" ")]),s("th",{staticClass:"is-done",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("task_status.fields.is_done"))+" ")]),s("th",{staticClass:"is-retake",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("task_status.fields.is_retake"))+" ")]),s("th",{staticClass:"is-artist-allowed",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("task_status.fields.is_artist_allowed"))+" ")]),s("th",{staticClass:"is-client-allowed",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("task_status.fields.is_client_allowed"))+" ")]),s("th",{staticClass:"is-feedback-request",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("task_status.fields.is_feedback_request"))+" ")]),s("th",{staticClass:"actions",attrs:{scope:"col"}})])]),s("tbody",{staticClass:"datatable-body"},t._l(t.entries,function(e){return s("tr",{key:e.id,staticClass:"datatable-row"},[s("td",{staticClass:"name"},[t._v(" "+t._s(e.name)+" ")]),s("task-status-cell",{staticClass:"short-name",attrs:{entry:e}}),s("boolean-cell",{staticClass:"is-default",attrs:{value:e.is_default}}),s("boolean-cell",{staticClass:"is-done",attrs:{value:e.is_done}}),s("boolean-cell",{staticClass:"is-retake",attrs:{value:e.is_retake}}),s("boolean-cell",{staticClass:"is-artist-allowed",attrs:{value:e.is_artist_allowed}}),s("boolean-cell",{staticClass:"is-client-allowed",attrs:{value:e.is_client_allowed}}),s("boolean-cell",{staticClass:"is-feedback-request",attrs:{value:e.is_feedback_request}}),s("row-actions-cell",{attrs:{"entry-id":e.id,"hide-delete":e.is_default===!0},on:{"edit-clicked":function(r){return t.$emit("edit-clicked",e)},"delete-clicked":function(r){return t.$emit("delete-clicked",e)}}})],1)}),0)])]),s("table-info",{attrs:{"is-loading":t.isLoading,"is-error":t.isError}}),s("p",{staticClass:"has-text-centered nb-task-status"},[t._v(" "+t._s(t.entries.length)+" "+t._s(t.$tc("task_status.number",t.entries.length))+" ")])],1)},B=[],D=o(x,F,B,!1,null,"cda9d867",null,null);const y=D.exports;const q={name:"task-status",components:{DeleteModal:h,EditTaskStatusModal:w,ListPageHeader:b,RouteTabs:p,TaskStatusList:y},data(){return{activeTab:"active",taskStatusToDelete:null,taskStatusToEdit:{color:"#000000"},modals:{edit:!1,del:!1},loading:{edit:!1,del:!1,list:!1},errors:{edit:!1,del:!1,list:!1},tabs:[{name:"active",label:this.$t("main.active")},{name:"archived",label:this.$t("main.archived")}]}},mounted(){this.activeTab=this.$route.query.tab||"active"},computed:{...i(["archivedTaskStatus","taskStatus"]),taskStatusList(){return this.activeTab==="active"?this.taskStatus:this.archivedTaskStatus}},created(){},methods:{...l(["deleteTaskStatus"]),confirmEditTaskStatus(a){const t=!(this.taskStatusToEdit&&this.taskStatusToEdit.id);let s="newTaskStatus";t||(s="saveTaskStatus",a.id=this.taskStatusToEdit.id),this.loading.edit=!0,this.errors.edit=!1,this.$store.dispatch(s,a).then(()=>{this.loading.edit=!1,this.modals.edit=!1}).catch(e=>{console.error(e),this.loading.edit=!1,this.errors.edit=!0})},confirmDeleteTaskStatus(){this.loading.del=!0,this.errors.del=!1,this.deleteTaskStatus(this.taskStatusToDelete).then(()=>{this.loading.del=!1,this.modals.del=!1}).catch(a=>{console.error(a),this.loading.del=!1,this.errors.del=!0})},deleteText(){const a=this.taskStatusToDelete;return a?this.$t("task_status.delete_text",{name:a.name}):""},onNewClicked(){this.taskStatusToEdit={color:"#000000"},this.modals.edit=!0},onEditClicked(a){this.taskStatusToEdit=a,this.modals.edit=!0},onDeleteClicked(a){this.taskStatusToDelete=a,this.modals.del=!0}},watch:{$route(){this.activeTab=this.$route.query.tab||"active"}},metaInfo(){return{title:`${this.$t("task_status.title")} - Kitsu`}}};var A=function(){var t=this,s=t._self._c;return s("div",{staticClass:"task-status page fixed-page"},[s("list-page-header",{attrs:{title:t.$t("task_status.title"),"new-entry-label":t.$t("task_status.new_task_status")},on:{"new-clicked":t.onNewClicked}}),s("route-tabs",{staticClass:"mt2",attrs:{"active-tab":t.activeTab,tabs:t.tabs,"route-name":"task-status"}}),s("task-status-list",{attrs:{entries:t.taskStatusList,"is-loading":t.loading.list,"is-error":t.errors.list},on:{"edit-clicked":t.onEditClicked,"delete-clicked":t.onDeleteClicked}}),s("edit-task-status-modal",{attrs:{active:t.modals.edit,"is-loading":t.loading.edit,"is-error":t.errors.edit,"task-status-to-edit":t.taskStatusToEdit},on:{cancel:function(e){t.modals.edit=!1},confirm:t.confirmEditTaskStatus}}),s("delete-modal",{attrs:{active:t.modals.del,"is-loading":t.loading.del,"is-error":t.errors.del,text:t.deleteText(),"error-text":t.$t("task_status.delete_error")},on:{cancel:function(e){t.modals.del=!1},confirm:t.confirmDeleteTaskStatus}})],1)},L=[],R=o(q,A,L,!1,null,"b927d826",null,null);const z=R.exports;export{z as default};
//# sourceMappingURL=TaskStatus-3c04ef4e.js.map