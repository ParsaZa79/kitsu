import{U as L,X as C,a as n,n as l,W as p,aP as w,R as a,aA as d,bM as S,bN as x,bO as M,b as h,bL as c,b_ as u,Y as D,s as I,bQ as P,$ as Y,a3 as O,T,d as R,aL as q}from"./TaskInfo-86bb07b0.js";import{B as N}from"./ButtonHrefLink-1322170c.js";import{ad as m,T as f,P as y}from"./index-5e15805d.js";const W={name:"combobox-production",components:{ChevronDownIcon:L,ComboboxMask:C,ProductionName:m},data(){return{showProductionList:!1}},props:{label:{default:"",type:String},productionList:{required:!0,type:Array},value:{default:"",type:String}},mounted(){},computed:{...n(["openProductions","productionMap"]),currentProduction(){return this.value?this.productionMap.get(this.value):this.productionList[0]}},methods:{selectProduction(s){this.$emit("input",s.id),this.showProductionList=!1},toggleProductionList(){this.showProductionList=!this.showProductionList}}};var j=function(){var e=this,t=e._self._c;return t("div",{staticClass:"field"},[e.label.length>0?t("label",{staticClass:"label"},[e._v(" "+e._s(e.label)+" ")]):e._e(),t("div",{staticClass:"production-combo"},[t("div",{staticClass:"flexrow",on:{click:e.toggleProductionList}},[t("div",{staticClass:"selected-production-line flexrow-item"},[e.currentProduction?t("production-name",{attrs:{production:e.currentProduction,"no-link":!0,size:25}}):e._e()],1),t("chevron-down-icon",{staticClass:"down-icon flexrow-item"})],1),e.showProductionList?t("div",{ref:"select",staticClass:"select-input"},e._l(e.productionList,function(i){return t("div",{key:i.id,staticClass:"production-line",on:{click:function(r){return e.selectProduction(i)}}},[t("production-name",{attrs:{size:25,"no-link":!0,production:i}})],1)}),0):e._e()]),t("combobox-mask",{attrs:{displayed:e.showProductionList},on:{click:e.toggleProductionList}})],1)},E=[],A=l(W,j,E,!1,null,"ffeebd8e",null,null);const F=A.exports;const B={name:"people-timesheet-list",components:{PeopleAvatar:p,PeopleName:w,TableInfo:f},data(){return{currentMonth:a().month()+1,currentYear:a().year(),currentWeek:a().week()}},props:{timesheet:{type:Object,default:()=>{}},people:{type:Array,default:()=>[]},detailLevel:{type:String,default:"day"},year:{type:Number,default:0},month:{type:Number,default:0},unit:{type:String,default:"hour"},isLoading:{type:Boolean,default:!1},isError:{type:Boolean,default:!1}},computed:{...n(["dayOffMap","isCurrentUserManager","organisation","route"]),yearRange(){return d(2018,a().year())},monthRange(){return S(this.year,this.currentYear,this.currentMonth)},dayRange(){return x(this.year,this.month,this.currentYear,this.currentMonth)},weekRange(){return M(this.year,this.currentYear,this.currentWeek)},isHours(){return this.unit==="hour"}},methods:{...h([]),monthToString:c,yearDuration(s,e){const t=`${s}`,i=this.getDuration(t,e);return this.isHours?i:u(this.organisation,i).toFixed(2)},monthDuration(s,e){const t=`${s}`,i=this.getDuration(t,e);return this.isHours?i:u(this.organisation,i).toFixed(2)},weekDuration(s,e){const t=this.getDuration(s,e);return this.isHours?t:u(this.organisation,t).toFixed(2)},dayDuration(s,e){if(this.dayOffMap[e]&&this.dayOffMap[e][`${s}`]===!0)return"OFF";{const t=this.getDuration(s,e);return this.isHours?t:u(this.organisation,t).toFixed(2)}},getDuration(s,e){return this.timesheet&&this.timesheet[s]&&this.timesheet[s][e]?this.timesheet[s][e]/60:"-"},isWeekend(s,e,t){let i=a(`${s}-${e}-${t}`);return t<10&&(i=a(`${s}-${e}-0${t}`)),[0,6].includes(i.day())},isDaySelected(s,e,t,i){return this.$route.params.person_id&&this.$route.params.person_id===s&&this.$route.params.year===e&&this.$route.params.month===t&&this.$route.params.day===i},isWeekSelected(s,e,t){return this.$route.params.person_id&&this.$route.params.person_id===s&&this.$route.params.year===e&&this.$route.params.week===t},isMonthSelected(s,e,t){return this.$route.params.person_id&&this.$route.params.person_id===s&&this.$route.params.year===e&&this.$route.params.month===t},isYearSelected(s,e){return this.$route.params.person_id&&this.$route.params.person_id===s&&this.$route.params.year===e},getWeekTitle(s){const e=a(this.currentYear+"-"+s,"YYYY-W"),t=e.clone().add(6,"days");return e.format("YYYY-MM-DD")+" - "+t.format("YYYY-MM-DD")},getYearDetailRoute(s,e){return{name:"timesheets-year-person",params:{person_id:s.id,year:e},query:{productionId:this.$route.query.productionId}}},getMonthDetailRoute(s,e,t){return{name:"timesheets-month-person",params:{person_id:s.id,year:e,month:t},query:{productionId:this.$route.query.productionId}}},getWeekDetailRoute(s,e,t){return{name:"timesheets-week-person",params:{person_id:s.id,year:e,week:t},query:{productionId:this.$route.query.productionId}}},getDayDetailRoute(s,e,t,i){return{name:"timesheets-day-person",params:{person_id:s.id,year:e,month:t,day:i},query:{productionId:this.$route.query.productionId}}},isDayOff(s,e){const t=`${e}`.padStart(2,"0");return this.dayOffMap[s]&&this.dayOffMap[s][t]}},watch:{route(){document.getElementsByClassName("selected").length===0&&(this.$refs.body.scrollLeft+=350)}}};var H=function(){var e=this,t=e._self._c;return t("div",{staticClass:"data-list"},[t("div",{ref:"body",staticClass:"datatable-wrapper"},[t("table",{staticClass:"datatable"},[t("thead",{staticClass:"datatable-head"},[t("tr",[t("th",{staticClass:"name datatable-row-header",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.name"))+" ")]),e._l(e.yearRange,function(i){return e.detailLevel==="year"?t("th",{key:"year-"+i,staticClass:"time year",attrs:{scope:"col"}},[e._v(" "+e._s(i)+" ")]):e._e()}),e._l(e.monthRange,function(i){return e.detailLevel==="month"?t("th",{key:"month-"+i,staticClass:"time month",attrs:{scope:"col"}},[e._v(" "+e._s(e.monthToString(i))+" ")]):e._e()}),e._l(e.weekRange,function(i){return e.detailLevel==="week"?t("th",{key:"week-"+i,staticClass:"daytime",attrs:{scope:"col",title:e.getWeekTitle(i)}},[e._v(" "+e._s(i)+" ")]):e._e()}),e._l(e.dayRange,function(i){return e.detailLevel==="day"?t("th",{key:"day-"+i,staticClass:"daytime",attrs:{scope:"col"}},[e._v(" "+e._s(i)+" ")]):e._e()}),t("th",{staticClass:"actions",attrs:{scope:"col"}})],2)]),e.isLoading?e._e():t("tbody",{staticClass:"datatable-body"},e._l(e.people,function(i){return t("tr",{key:i.id,staticClass:"datatable-row"},[t("th",{staticClass:"datatable-row-header name"},[t("div",{staticClass:"flexrow"},[t("people-avatar",{staticClass:"flexrow-item",attrs:{person:i}}),t("people-name",{staticClass:"flexrow-item",attrs:{person:i}})],1)]),e._l(e.yearRange,function(r){return e.detailLevel==="year"?t("td",{key:"year-"+r+"-"+i.id,class:{time:!0,year:!0,selected:e.isYearSelected(i.id,r)}},[e.yearDuration(r,i.id)>0?t("router-link",{staticClass:"duration",attrs:{to:e.getYearDetailRoute(i,r)}},[e._v(" "+e._s(e.yearDuration(r,i.id))+" ")]):t("span",[e._v(" - ")])],1):e._e()}),e._l(e.monthRange,function(r){return e.detailLevel==="month"?t("td",{key:"month-"+r+"-"+i.id,class:{time:!0,month:!0,selected:e.isMonthSelected(i.id,e.year,r)}},[e.monthDuration(r,i.id)>0?t("router-link",{staticClass:"duration",attrs:{to:e.getMonthDetailRoute(i,e.year,r)}},[e._v(" "+e._s(e.monthDuration(r,i.id))+" ")]):t("span",[e._v(" - ")])],1):e._e()}),e._l(e.weekRange,function(r){return e.detailLevel==="week"?t("td",{key:"week-"+r+"-"+i.id,class:{daytime:!0,selected:e.isWeekSelected(i.id,e.year,r)}},[e.weekDuration(r,i.id)>0?t("router-link",{class:{duration:!0,warning:e.weekDuration(r,i.id)>5*e.organisation.hours_by_day},attrs:{to:e.getWeekDetailRoute(i,e.year,r)}},[e._v(" "+e._s(e.weekDuration(r,i.id))+" ")]):t("span",[e._v(" - ")])],1):e._e()}),e._l(e.dayRange,function(r){return e.detailLevel==="day"?t("td",{key:"day-"+r+"-"+i.id,staticClass:"daytime",class:{daytime:!0,weekend:e.isWeekend(e.year,e.month,r),selected:e.isDaySelected(i.id,e.year,e.month,r)}},[e.dayDuration(r,i.id)>0?t("router-link",{staticClass:"duration",attrs:{to:e.getDayDetailRoute(i,e.year,e.month,r)}},[e._v(" "+e._s(e.dayDuration(r,i.id))+" ")]):e.isDayOff(i.id,r)?t("span",[e._v(" OFF ")]):t("span",[e._v(" - ")])],1):e._e()}),t("td",{staticClass:"actions"})],2)}),0)])]),t("table-info",{attrs:{"is-loading":e.isLoading,"is-error":e.isError}}),e.isLoading?e._e():t("p",{staticClass:"has-text-centered footer-info"},[e._v(" "+e._s(e.people.length)+" "+e._s(e.$tc("people.persons",e.people.length))+" ")])],1)},U=[],z=l(B,H,U,!1,null,"9cac97d9",null,null);const X=z.exports;const G={name:"timespent-task-list",components:{TableInfo:f,ProductionName:m,TaskTypeName:D},data(){return{projectNames:{}}},props:{tasks:{type:Array,default:()=>[]},isLoading:{type:Boolean,default:!1},isLoadingError:{type:Boolean,default:!1}},computed:{...n(["currentProduction","lastProductionScreen","productionMap","taskTypeMap"]),projects(){const s={};return this.tasks.forEach(e=>{s[e.project_id]||(s[e.project_id]={}),s[e.project_id][e.task_type_id]||(s[e.project_id][e.task_type_id]=[]);let t=e.entity_name;["Shot","Sequence"].includes(e.entity_type_name)?(t=`${e.sequence_name} / ${t}`,e.episode_name&&(t=`${e.episode_name} / ${t}`)):t=`${e.entity_type_name} / ${t}`,s[e.project_id][e.task_type_id].push({id:e.task_id,project_id:e.project_id,task_type_id:e.task_type_id,name:t,duration:e.duration})}),Object.keys(s).forEach(e=>{Object.keys(s[e]).forEach(t=>{s[e][t]=I(s[e][t])})}),s}},methods:{...h([]),getTaskPath(s){const e=this.productionMap.get(s.project_id),t=e.production_type==="tvshow",i={id:e.first_episode_id};return P(s,null,t,i,this.taskTypeMap)},onBodyScroll(s,e){this.$refs.headerWrapper.style.left=`-${e.scrollLeft}px`}},watch:{tasks(){this.projectNames=this.tasks.reduce((s,e)=>(s[e.project_id]=e.project_name,s),{})}}};var K=function(){var e=this,t=e._self._c;return t("div",{staticClass:"data-list"},[t("table-info",{attrs:{"is-loading":e.isLoading,"is-error":e.isLoadingError}}),t("div",{staticClass:"aggregated-time-spents"},e._l(Object.keys(e.projects),function(i){return t("div",{key:i,staticClass:"by-project"},[e.projectNames[i]?t("production-name",{attrs:{production:{id:i,name:e.projectNames[i]}}}):e._e(),e._l(Object.keys(e.projects[i]),function(r){return t("div",{key:r,staticClass:"by-task-type-id"},[t("task-type-name",{attrs:{"task-type":e.taskTypeMap.get(r)}}),t("div",{staticClass:"table-body"},[t("table",{staticClass:"datatable"},[t("tbody",{staticClass:"datatable-body"},e._l(e.projects[i][r],function(o){return t("tr",{key:o.id,staticClass:"by-task-type-id datatable-row"},[t("router-link",{attrs:{to:e.getTaskPath(o)}},[t("td",{staticClass:"name"},[e._v(" "+e._s(o.name)+" ")]),t("td",{staticClass:"duration"},[e._v(e._s(o.duration/60))])])],1)}),0)])])],1)})],2)}),0)],1)},Q=[],V=l(G,K,Q,!1,null,"7469959a",null,null);const J=V.exports;const Z={name:"people-timesheet-info",components:{XIcon:Y,PageTitle:y,PeopleAvatar:p,TimeSpentTaskList:J},props:{person:{type:Object,default:()=>{}},year:{type:Number,default:0},month:{type:Number,default:0},week:{type:Number,default:0},day:{type:Number,default:0},isLoading:{type:Boolean,default:!1},isLoadingError:{type:Boolean,default:!1},tasks:{type:Array,default:()=>[]},dayOffCount:{type:Number,default:0}},computed:{...n([]),startDay(){return a().day("Monday").year(this.year).week(this.week).date()},endDay(){return a().day("Monday").year(this.year).week(this.week).add("days",6).date()},weekMonth(){return a().day("Monday").year(this.year).week(this.week).format("MMM")},monthString(){return c(this.month)},isYearInfo(){return!this.isMonthInfo&&!this.isWeekInfo&&!this.isDayInfo},isMonthInfo(){return this.$route.path.indexOf("month")>0},isWeekInfo(){return this.$route.path.indexOf("week")>0},isDayInfo(){return this.$route.path.indexOf("day")>0},closeRoute(){return this.isMonthInfo?{name:"timesheets-month",params:{year:this.year}}:this.isWeekInfo?{name:"timesheets-week",params:{year:this.year}}:this.isDayInfo?{name:"timesheets-day",params:{year:this.year,month:this.month}}:{name:"timesheets"}}},methods:{...h([]),onCloseClicked(){this.$emit("close")}}};var ee=function(){var e=this,t=e._self._c;return t("div",{staticClass:"people-timesheet-info"},[t("div",{staticClass:"close"},[t("router-link",{staticClass:"close-button",attrs:{to:e.closeRoute}},[t("x-icon")],1)],1),t("div",{staticClass:"flexrow"},[t("people-avatar",{staticClass:"flexrow-item",attrs:{person:e.person,"no-cache":!0}}),t("page-title",{staticClass:"flexrow-item",attrs:{text:e.person.full_name}})],1),e.isYearInfo?t("div",{staticClass:"info-date"},[e._v(" "+e._s(e.year)+" ")]):e._e(),e.isMonthInfo?t("div",{staticClass:"info-date"},[e._v(" "+e._s(e.monthString)+" "+e._s(e.year)+" ")]):e.isWeekInfo?t("div",{staticClass:"info-date"},[e._v(" week "+e._s(e.week)+", "+e._s(e.startDay)+" - "+e._s(e.endDay)+" "+e._s(e.weekMonth)+" "+e._s(e.year)+" ")]):e._e(),e.isDayInfo?e.isDayInfo?t("div",{staticClass:"info-date"},[e._v(" "+e._s(e.day)+" "+e._s(e.monthString)+" "+e._s(e.year)+" ")]):e._e():t("div",{staticClass:"info-day-off"},[e._v(" "+e._s(e.dayOffCount)+" days off ")]),t("time-spent-task-list",{staticClass:"time-spent-list",attrs:{tasks:e.tasks,"is-loading":e.isLoading,"is-error":e.isLoadingError}})],1)},te=[],se=l(Z,ee,te,!1,null,"9b437f2c",null,null);const ie=se.exports;const re={name:"people",components:{ButtonSimple:O,ButtonHrefLink:N,Combobox:T,ComboboxProduction:F,PageTitle:y,PeopleTimesheetList:X,PeopleTimesheetInfo:ie},data(){return{detailOptions:[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"},{label:"Year",value:"year"}],unitOptions:[{label:"Hour",value:"hour"},{label:"Day",value:"day"}],detailLevelString:"day",detailLevel:"day",productionIdString:"",productionId:"",yearString:`${a().year()}`,monthString:`${a().month()+1}`,unit:"hour",currentYear:a().year(),currentMonth:a().month()+1,currentWeek:a().week(),currentDay:a().date(),currentPerson:this.getCurrentPerson(),isLoading:!1,isLoadingError:!1,dayOffCount:0,isInfoLoading:!1,isInfoLoadingError:!1,showInfo:!0,tasks:[]}},created(){this.isLoading=!0,this.people.length===0?this.loadPeople(()=>{this.loadRoute()}):this.loadRoute()},mounted(){const s=this.$route.query.productionId;s&&(this.silent=!0,this.productionId=s,this.productionIdString=s,this.reloadTimesheet().then(()=>{this.silent=!1}))},computed:{...n(["isCurrentUserAdmin","isCurrentUserManager","openProductions","organisation","people","personMap","timesheet"]),productionList(){return[{id:"",name:this.$t("main.all")}].concat([...this.openProductions])},filteredPeople(){return this.people.filter(s=>{const e=Object.keys(this.timesheet);let t=!1,i=0;do this.timesheet[e[i]]&&(t=this.timesheet[e[i]][s.id]!==void 0),i++;while(!t&&i<e.length);return t})},yearOptions(){const e=a().year();return d(2018,e).map(t=>({label:t,value:`${t}`}))},monthOptions(){const s=`${a().year()}`,e=1,t=a().month()+1;let i=d(e,12);return s===this.yearString&&(i=d(e,t)),i.map(r=>({label:c(r),value:`${r}`}))}},methods:{...h(["loadPeople","loadAggregatedPersonDaysOff","loadAggregatedPersonTimeSpents","loadTimesheets"]),reloadTimesheet(){return this.isLoading=!0,this.isLoadingError=!1,this.loadTimesheets({detailLevel:this.detailLevel,year:this.currentYear,month:this.currentMonth,productionId:this.productionId}).then(s=>(this.isLoading=!1,Promise.resolve())).catch(s=>(console.error(s),this.isLoading=!1,this.isLoadingError=!0,Promise.resolve()))},showSideInfo(){this.showInfo=!0},hideSideInfo(){this.showInfo=!1},loadRoute(){this.$options.silent=!0;const{month:s,year:e,week:t,day:i}=this.$route.params,r=`${this.productionId}`,o=`${this.detailLevel}`,_=`${this.currentMonth}`,g=`${this.currentYear}`;this.$route.path.indexOf("week")>0&&(this.detailLevel="week"),this.$route.path.indexOf("month")>0&&(this.detailLevel="month"),this.$route.path.indexOf("day")>0&&(this.detailLevel="day"),this.$route.path.indexOf("year")>0&&(this.detailLevel="year"),this.currentPerson=this.getCurrentPerson(),this.detailLevelString=this.detailLevel,s&&(this.currentMonth=Number(s),this.monthString=`${s}`),e&&(this.currentYear=Number(e),this.yearString=`${e}`),t&&(this.currentWeek=Number(t),this.weekString=`${t}`),i&&(this.currentDay=Number(i)),this.productionId=this.$route.query.productionId||"";const v=o!==this.detailLevel,$=_.localeCompare(`${this.currentMonth}`)!==0,b=g.localeCompare(`${this.currentYear}`)!==0,k=r.localeCompare(`${this.productionId}`)!==0;this.$nextTick(()=>{this.$options.silent=!1}),this.$route.path.indexOf("person")>0?(this.showSideInfo(),this.loadAggregate()):this.hideSideInfo(),(this.isLoading||$||b||v||k)&&this.reloadTimesheet()},loadAggregate(){this.isInfoLoading=!0,this.isInfoLoadingError=!1,this.tasks=[],this.loadAggregatedPersonTimeSpents({personId:this.$route.params.person_id,detailLevel:this.detailLevel,year:this.$route.params.year,month:this.$route.params.month,week:this.$route.params.week,day:this.$route.params.day,productionId:this.productionId}).then(s=>(this.tasks=s.filter(e=>e.duration>0),this.loadAggregatedPersonDaysOff({personId:this.$route.params.person_id,detailLevel:this.detailLevel,year:this.$route.params.year,month:this.$route.params.month,week:this.$route.params.week}))).then(s=>{this.dayOffCount=s.length,this.isInfoLoading=!1}).catch(s=>{console.error(s),this.isInfoLoadingError=!0})},getCurrentPerson(){const s=this.$route.params.person_id;return s&&this.personMap?this.personMap.get(s):{}},exportTimesheet(){const s=["timesheet",this.detailLevel,this.currentYear];this.detailLevel==="day"&&s.push(this.currentMonth);const e=R.slugify(s.join("_"));q.generateTimesheet(e,this.timesheet,this.filteredPeople,this.unit,this.organisation,this.detailLevel,this.currentYear,this.currentMonth,a().month()+1,a().year(),a().week())}},watch:{detailLevelString(){this.silent||this.detailLevel!==this.detailLevelString&&(this.detailLevelString==="month"?this.$router.push({name:"timesheets-month",params:{year:this.currentYear},query:this.$route.query}):this.detailLevelString==="week"?this.$router.push({name:"timesheets-week",params:{year:this.currentYear},query:this.$route.query}):this.detailLevelString==="day"?this.$router.push({name:"timesheets-day",params:{year:this.currentYear,month:this.currentMonth},query:this.$route.query}):this.detailLevelString==="year"&&this.$router.push({name:"timesheets-year",params:{year:this.currentYear},query:this.$route.query}))},yearString(){if(this.silent)return;const s=Number(this.yearString),e=a().month();this.currentYear!==s&&(this.detailLevel==="month"?this.$router.push({name:"timesheets-month",params:{year:s},query:this.$route.query}):this.detailLevel==="week"?this.$router.push({name:"timesheets-week",params:{year:s},query:this.$route.query}):this.$router.push({name:"timesheets-day",params:{year:s,month:Math.min(Number(this.monthString),e)},query:this.$route.query}))},monthString(){this.silent||this.currentMonth!==Number(this.monthString)&&this.$router.push({name:"timesheets-day",params:{year:this.currentYear,month:Number(this.monthString)},query:this.$route.query})},productionIdString(){this.silent||this.$router.push({query:{productionId:this.productionIdString}})},$route(){this.loadRoute()}},metaInfo(){return{title:`${this.$t("timesheets.title")} - Kitsu`}}};var ae=function(){var e=this,t=e._self._c;return t("div",{staticClass:"columns fixed-page"},[t("div",{staticClass:"column main-column"},[t("div",{staticClass:"timesheets page"},[t("div",{staticClass:"page-header flexrow"},[t("page-title",{staticClass:"flexrow-item title",attrs:{text:e.$t("timesheets.title")}}),t("combobox-production",{staticClass:"flexrow-item",attrs:{label:e.$t("main.production"),"production-list":e.productionList},model:{value:e.productionIdString,callback:function(i){e.productionIdString=i},expression:"productionIdString"}}),t("combobox",{staticClass:"flexrow-item",attrs:{label:e.$t("timesheets.detail_level"),options:e.detailOptions},model:{value:e.detailLevelString,callback:function(i){e.detailLevelString=i},expression:"detailLevelString"}}),e.detailLevelString!=="year"?t("combobox",{staticClass:"flexrow-item",attrs:{label:e.$t("timesheets.year"),options:e.yearOptions},model:{value:e.yearString,callback:function(i){e.yearString=i},expression:"yearString"}}):e._e(),e.detailLevelString==="day"?t("combobox",{staticClass:"flexrow-item",attrs:{label:e.$t("timesheets.month"),options:e.monthOptions},model:{value:e.monthString,callback:function(i){e.monthString=i},expression:"monthString"}}):e._e(),t("combobox",{staticClass:"flexrow-item",attrs:{label:e.$t("timesheets.unit"),options:e.unitOptions},model:{value:e.unit,callback:function(i){e.unit=i},expression:"unit"}}),t("div",{staticClass:"filler"}),t("button-simple",{staticClass:"flexrow-item",attrs:{title:e.$t("timesheets.export_timesheet"),icon:"download"},on:{click:e.exportTimesheet}}),e.isCurrentUserAdmin?t("button-href-link",{staticClass:"flexrow-item",attrs:{title:e.$t("timesheets.export_timespents"),path:"/api/export/csv/time-spents.csv",icon:"list"}}):e._e()],1),t("people-timesheet-list",{staticClass:"data-list",attrs:{people:e.filteredPeople,timesheet:e.timesheet,"detail-level":e.detailLevel,month:e.currentMonth,year:e.currentYear,unit:e.unit,"is-loading":e.isLoading,"is-error":e.isLoadingError}})],1)]),e.showInfo?t("div",{staticClass:"column side-column"},[t("people-timesheet-info",{attrs:{person:e.currentPerson,production:e.productionId,year:e.currentYear,month:e.currentMonth,week:e.currentWeek,day:e.currentDay,unit:e.unit,"is-loading":e.isInfoLoading,"is-loading-error":e.isInfoLoadingError,tasks:e.tasks,"day-off-count":e.dayOffCount},on:{close:e.hideSideInfo}})],1):e._e()])},oe=[],ne=l(re,ae,oe,!1,null,"026af6c9",null,null);const he=ne.exports;export{he as default};
