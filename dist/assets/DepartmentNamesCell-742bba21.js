import{v as s,m as r,g as m,l as p,n as _}from"./index-a3f257ca.js";const o={name:"department-names-cell",data(){return{}},components:{DepartmentName:s},props:{departments:{type:Array,default:()=>[]}},computed:{...r(["departmentMap"])},methods:{...m([]),sortDepartments(n=[]){return p(n.map(e=>this.departmentMap.get(e)))}}};var l=function(){var e=this,t=e._self._c;return t("td",{staticClass:"departments"},e._l(e.sortDepartments(e.departments),function(a){return t("span",{key:"department-"+a.id,staticClass:"departments-element"},[a?t("department-name",{attrs:{department:a}}):e._e()],1)}),0)},c=[],d=_(o,l,c,!1,null,"163668a6",null,null);const u=d.exports;export{u as D};
//# sourceMappingURL=DepartmentNamesCell-742bba21.js.map