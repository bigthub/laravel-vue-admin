(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-030d"],{"8G3T":function(e,t,r){"use strict";var a=r("ZgIl");r.n(a).a},"PnZ/":function(e,t,r){"use strict";r.d(t,"c",function(){return n}),r.d(t,"d",function(){return o}),r.d(t,"b",function(){return i}),r.d(t,"e",function(){return l}),r.d(t,"a",function(){return u}),r.d(t,"f",function(){return s});var a=r("t3Un");function n(e){return Object(a.a)({url:"/api/api_param",method:"get",params:e})}function o(e){return a.a.post("/api/api_param",e)}function i(e){return a.a.get("/api/api_param/"+e)}function l(e,t){return a.a.patch("/api/api_param/"+e,t)}function u(e){return a.a.delete("/api/api_param/"+e)}function s(e){return Object(a.a)({url:"/api/api_param_search",method:"get",params:e})}},R8mO:function(e,t,r){"use strict";r.d(t,"d",function(){return n}),r.d(t,"e",function(){return o}),r.d(t,"c",function(){return i}),r.d(t,"f",function(){return l}),r.d(t,"a",function(){return u}),r.d(t,"g",function(){return s}),r.d(t,"h",function(){return c}),r.d(t,"b",function(){return p});var a=r("t3Un");function n(e){return Object(a.a)({url:"/api/api_excel",method:"get",params:e})}function o(e){return a.a.post("/api/api_excel",e)}function i(e){return a.a.get("/api/api_excel/"+e)}function l(e,t){return a.a.patch("/api/api_excel/"+e,t)}function u(e){return a.a.delete("/api/api_excel/"+e)}function s(e){return Object(a.a)({url:"/api/api_excel_search",method:"get",params:e})}function c(e){return Object(a.a)({url:"/api/start_task",method:"post",params:e})}function p(e){return Object(a.a)({url:"/api/download_log",method:"post",params:e})}},ZgIl:function(e,t,r){},wf12:function(e,t,r){"use strict";r.r(t);var a=r("PnZ/"),n=r("R8mO"),o=r("X4fA"),i={data:function(){return{uploadUrl:"https://www.guke1.com/api/upload?token="+Object(o.a)(),fileList:[],item:"",apiParam:[],form:{upload_url:"",api_param_id:"",appkey:"",concurrent:5,uid:"",description:"",auto_delete:2,sort:"",loading:!1},rules:{api_param_id:[{required:!0,message:"请选择接口",trigger:"blur"}],upload_url:[{required:!0,message:"请上传文件",trigger:"blur"}],appkey:[{required:!0,message:"请输入 appkey",trigger:"blur"}],concurrent:[{required:!0,message:"请输入并发请求数",trigger:"blur"}],description:[{required:!0,message:"请输入描述",trigger:"blur"}],auto_delete:[{required:!0,message:"请输入天数",trigger:"blur"}]},redirect:"/api_excel/index"}},watch:{item:function(e){this.form.api_param_id=e,this.getItem()}},created:function(){this.init()},methods:{getItem:function(){this.$emit("getItem",this.form.apiParam)},init:function(){var e=this;Object(a.c)({perPage:20}).then(function(t){e.apiParam=t.data.data})},handleRemove:function(e,t){},handlePreview:function(e){},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")},handleSuccess:function(e,t,r){200!==e.code?this.$message({message:e.reason,type:"error"}):this.form.upload_url=e.data.url},onSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.loading=!0,Object(n.e)(t.form).then(function(e){t.loading=!1,200===e.code?(t.$message({message:"操作成功",type:"success"}),t.$router.push({path:t.redirect||"/"})):t.$message.error(e.reason)})})},onCancel:function(){this.$message({message:"cancel!",type:"warning"})},resetForm:function(e){this.$refs[e].resetFields()}}},l=(r("8G3T"),r("KHd+")),u=Object(l.a)(i,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"接口",prop:"api_param_id"}},[r("el-select",{attrs:{placeholder:"请选择接口","value-key":"name"},model:{value:e.item,callback:function(t){e.item=t},expression:"item"}},e._l(e.apiParam,function(t,a){return r("el-option",{key:a,attrs:{label:t.name,value:t.id}},[r("span",{staticStyle:{float:"left",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.name))])])}))],1),e._v(" "),r("el-form-item",{attrs:{label:"appkey",prop:"appkey"}},[r("el-col",{attrs:{span:11}},[r("el-input",{model:{value:e.form.appkey,callback:function(t){e.$set(e.form,"appkey",t)},expression:"form.appkey"}})],1),e._v(" "),r("el-col",{attrs:{span:13}})],1),e._v(" "),r("el-form-item",{attrs:{label:"并发请求",prop:"concurrent"}},[r("el-col",{attrs:{span:2}},[r("el-input",{model:{value:e.form.concurrent,callback:function(t){e.$set(e.form,"concurrent",t)},expression:"form.concurrent"}})],1),e._v(" "),r("el-col",{attrs:{span:22}},[e._v("\n           任务执行时并发请求的数量，字段必须是数字默认： 5\n      ")])],1),e._v(" "),r("el-form-item",{attrs:{label:"上传文件",prop:"upload_url",accept:"application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.upload_url,expression:"form.upload_url"}],attrs:{type:"hidden"},domProps:{value:e.form.upload_url},on:{input:function(t){t.target.composing||e.$set(e.form,"upload_url",t.target.value)}}}),e._v(" "),r("el-upload",{staticClass:"upload-demo",attrs:{action:e.uploadUrl,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"before-remove":e.beforeRemove,"on-exceed":e.handleExceed,"file-list":e.fileList,multiple:""}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传 xls/xlsx 文件，且不超过 20M")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"描述内容",prop:"description"}},[r("el-col",{attrs:{span:11}},[r("el-input",{attrs:{size:"medium",placeholder:"请输入内容"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),r("el-col",{attrs:{span:13}})],1),e._v(" "),r("el-form-item",{attrs:{label:"自动删除时间",prop:"auto_delete"}},[r("el-col",{attrs:{span:2}},[r("el-input",{model:{value:e.form.auto_delete,callback:function(t){e.$set(e.form,"auto_delete",t)},expression:"form.auto_delete"}})],1),e._v(" "),r("el-col",{attrs:{span:22}},[e._v("\n           任务执行完成后自动删除的时间（单位：天），默认： 2 天\n      ")]),e._v(" "),r("el-col",{attrs:{span:13}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)},[],!1,null,"7de5badd",null);u.options.__file="add.vue";t.default=u.exports}}]);