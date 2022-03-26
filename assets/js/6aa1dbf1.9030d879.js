"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6217],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return E}});var s=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=s.createContext({}),i=function(e){var n=s.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return s.createElement(d.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},S=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),S=i(t),E=a,p=S["".concat(d,".").concat(E)]||S[E]||o[E]||r;return t?s.createElement(p,l(l({ref:n},u),{},{components:t})):s.createElement(p,l({ref:n},u))}));function E(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=S;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<r;i++)l[i]=t[i];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}S.displayName="MDXCreateElement"},6479:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return E},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return o}});var s=t(3117),a=t(102),r=(t(7294),t(3905)),l=["components"],c={},d=void 0,i={unversionedId:"SQL/exam",id:"SQL/exam",title:"exam",description:"\u4ee5\u4e0b\u4ee3\u7801\u6267\u884c\u73af\u5883\u4e3a MySQL 8.0\uff0c\u6709\u4e00\u90e8\u5206\u4e0d\u53ef\u7167\u642c\u5165 SQL Server\u3002\u8f83\u4e3a\u660e\u663e\u7684\u4fbf\u662f\u5b58\u5728\u5206\u9875\u67e5\u8be2\u7684\u8bed\u53e5",source:"@site/docs/SQL/exam.md",sourceDirName:"SQL",slug:"/SQL/exam",permalink:"/docs/SQL/exam",editUrl:"https://github.com/YangFong/blog/tree/main/docs/SQL/exam.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u7ec3\u4e60",permalink:"/docs/SQL/\u7ec3\u4e60"},next:{title:"\u7b97\u6cd5",permalink:"/docs/category/\u7b97\u6cd5"}},u={},o=[{value:"1. \u67e5\u8be2\u5e73\u5747\u6210\u7ee9\u5927\u4e8e\u7b49\u4e8e 60 \u5206\u7684\u540c\u5b66\u7684\u5b66\u751f\u7f16\u53f7\u548c\u5b66\u751f\u59d3\u540d\u548c\u5e73\u5747\u6210\u7ee9",id:"1-\u67e5\u8be2\u5e73\u5747\u6210\u7ee9\u5927\u4e8e\u7b49\u4e8e-60-\u5206\u7684\u540c\u5b66\u7684\u5b66\u751f\u7f16\u53f7\u548c\u5b66\u751f\u59d3\u540d\u548c\u5e73\u5747\u6210\u7ee9",level:2},{value:"2. \u67e5\u8be2\u5728 SC \u8868\u5b58\u5728\u6210\u7ee9\u7684\u5b66\u751f\u4fe1\u606f",id:"2-\u67e5\u8be2\u5728-sc-\u8868\u5b58\u5728\u6210\u7ee9\u7684\u5b66\u751f\u4fe1\u606f",level:2},{value:"3. \u67e5\u8be2\u6240\u6709\u540c\u5b66\u7684\u5b66\u751f\u7f16\u53f7\u3001\u5b66\u751f\u59d3\u540d\u3001\u9009\u8bfe\u603b\u6570\u3001\u6240\u6709\u8bfe\u7a0b\u7684\u603b\u6210\u7ee9\uff08\u6ca1\u6210\u7ee9\u7684\u663e\u793a\u4e3a null \uff09",id:"3-\u67e5\u8be2\u6240\u6709\u540c\u5b66\u7684\u5b66\u751f\u7f16\u53f7\u5b66\u751f\u59d3\u540d\u9009\u8bfe\u603b\u6570\u6240\u6709\u8bfe\u7a0b\u7684\u603b\u6210\u7ee9\u6ca1\u6210\u7ee9\u7684\u663e\u793a\u4e3a-null-",level:2},{value:"4. \u67e5\u6709\u6210\u7ee9\u7684\u5b66\u751f\u4fe1\u606f",id:"4-\u67e5\u6709\u6210\u7ee9\u7684\u5b66\u751f\u4fe1\u606f",level:2},{value:"5. \u67e5\u8be2\u5b66\u8fc7\u300c\u5f20\u4e09\u300d\u8001\u5e08\u6388\u8bfe\u7684\u540c\u5b66\u7684\u4fe1\u606f",id:"5-\u67e5\u8be2\u5b66\u8fc7\u5f20\u4e09\u8001\u5e08\u6388\u8bfe\u7684\u540c\u5b66\u7684\u4fe1\u606f",level:2},{value:"6. \u67e5\u8be2\u6ca1\u6709\u5b66\u5168\u6240\u6709\u8bfe\u7a0b\u7684\u5b66\u751f\u7684\u4fe1\u606f",id:"6-\u67e5\u8be2\u6ca1\u6709\u5b66\u5168\u6240\u6709\u8bfe\u7a0b\u7684\u5b66\u751f\u7684\u4fe1\u606f",level:2},{value:"7. \u67e5\u8be2\u548c &quot;01&quot; \u53f7\u7684\u540c\u5b66\u5b66\u4e60\u7684\u8bfe\u7a0b\u5b8c\u5168\u76f8\u540c\u7684\u5176\u4ed6\u540c\u5b66\u7684\u4fe1\u606f",id:"7-\u67e5\u8be2\u548c-01-\u53f7\u7684\u540c\u5b66\u5b66\u4e60\u7684\u8bfe\u7a0b\u5b8c\u5168\u76f8\u540c\u7684\u5176\u4ed6\u540c\u5b66\u7684\u4fe1\u606f",level:2},{value:"8. \u67e5\u8be2\u6ca1\u5b66\u8fc7 &quot;\u5f20\u4e09&quot; \u8001\u5e08\u8bb2\u6388\u7684\u4efb\u4e00\u95e8\u8bfe\u7a0b\u7684\u5b66\u751f\u59d3\u540d",id:"8-\u67e5\u8be2\u6ca1\u5b66\u8fc7-\u5f20\u4e09-\u8001\u5e08\u8bb2\u6388\u7684\u4efb\u4e00\u95e8\u8bfe\u7a0b\u7684\u5b66\u751f\u59d3\u540d",level:2},{value:"9. \u67e5\u8be2\u4e24\u95e8\u53ca\u5176\u4ee5\u4e0a\u4e0d\u53ca\u683c\u8bfe\u7a0b\u7684\u540c\u5b66\u7684\u5b66\u53f7\uff0c\u59d3\u540d\u53ca\u5176\u5e73\u5747\u6210\u7ee9",id:"9-\u67e5\u8be2\u4e24\u95e8\u53ca\u5176\u4ee5\u4e0a\u4e0d\u53ca\u683c\u8bfe\u7a0b\u7684\u540c\u5b66\u7684\u5b66\u53f7\u59d3\u540d\u53ca\u5176\u5e73\u5747\u6210\u7ee9",level:2},{value:"10. \u68c0\u7d22 &quot;01&quot; \u8bfe\u7a0b\u5206\u6570\u5c0f\u4e8e 60\uff0c\u6309\u5206\u6570\u964d\u5e8f\u6392\u5217\u7684\u5b66\u751f\u4fe1\u606f\u548c",id:"10-\u68c0\u7d22-01-\u8bfe\u7a0b\u5206\u6570\u5c0f\u4e8e-60\u6309\u5206\u6570\u964d\u5e8f\u6392\u5217\u7684\u5b66\u751f\u4fe1\u606f\u548c",level:2},{value:"11. \u6309\u5e73\u5747\u6210\u7ee9\u4ece\u9ad8\u5230\u4f4e\u663e\u793a\u6240\u6709\u5b66\u751f\u7684\u6240\u6709\u8bfe\u7a0b\u7684\u6210\u7ee9\u4ee5\u53ca\u5e73\u5747\u6210\u7ee9",id:"11-\u6309\u5e73\u5747\u6210\u7ee9\u4ece\u9ad8\u5230\u4f4e\u663e\u793a\u6240\u6709\u5b66\u751f\u7684\u6240\u6709\u8bfe\u7a0b\u7684\u6210\u7ee9\u4ee5\u53ca\u5e73\u5747\u6210\u7ee9",level:2},{value:"12. \u67e5\u8be2\u6210\u7ee9\u8868\u4e2d\u5404\u79d1\u6210\u7ee9\u524d\u4e09\u540d\u7684\u4fe1\u606f\u4ee5\u53ca\u6392\u540d",id:"12-\u67e5\u8be2\u6210\u7ee9\u8868\u4e2d\u5404\u79d1\u6210\u7ee9\u524d\u4e09\u540d\u7684\u4fe1\u606f\u4ee5\u53ca\u6392\u540d",level:2},{value:"13. \u67e5\u8be2\u51fa\u53ea\u9009\u4fee\u4e24\u95e8\u8bfe\u7a0b\u7684\u5b66\u751f\u5b66\u53f7\u548c\u59d3\u540d",id:"13-\u67e5\u8be2\u51fa\u53ea\u9009\u4fee\u4e24\u95e8\u8bfe\u7a0b\u7684\u5b66\u751f\u5b66\u53f7\u548c\u59d3\u540d",level:2},{value:"14. \u67e5\u8be2\u540d\u5b57\u4e2d\u542b\u6709\u300c\u98ce\u300d\u5b57\u7684\u5b66\u751f\u4fe1\u606f",id:"14-\u67e5\u8be2\u540d\u5b57\u4e2d\u542b\u6709\u98ce\u5b57\u7684\u5b66\u751f\u4fe1\u606f",level:2},{value:"15. \u67e5\u8be2 1990 \u5e74\u51fa\u751f\u7684\u5b66\u751f\u4fe1\u606f",id:"15-\u67e5\u8be2-1990-\u5e74\u51fa\u751f\u7684\u5b66\u751f\u4fe1\u606f",level:2},{value:"16. \u67e5\u8be2\u5404\u5b66\u751f\u7684\u59d3\u540d\u3001\u5e74\u9f84\uff08\u53ea\u6309\u5e74\u4efd\u6765\u8ba1\u7b97\uff09",id:"16-\u67e5\u8be2\u5404\u5b66\u751f\u7684\u59d3\u540d\u5e74\u9f84\u53ea\u6309\u5e74\u4efd\u6765\u8ba1\u7b97",level:2},{value:"17. \u67e5\u8be2\u672c\u6708\u8fc7\u751f\u65e5\u7684\u5b66\u751f\u4fe1\u606f",id:"17-\u67e5\u8be2\u672c\u6708\u8fc7\u751f\u65e5\u7684\u5b66\u751f\u4fe1\u606f",level:2},{value:"18. \u67e5\u8be2\u4e0b\u4e0b\u6708\u8fc7\u751f\u65e5\u7684\u5b66\u751f\u4fe1\u606f",id:"18-\u67e5\u8be2\u4e0b\u4e0b\u6708\u8fc7\u751f\u65e5\u7684\u5b66\u751f\u4fe1\u606f",level:2},{value:"19. \u67e5\u8be2\u6210\u7ee9\u8868\u7b2c 2 \u9875\u6570\u636e\uff08\u6bcf\u9875 5 \u6761\u6570\u636e\uff0c\u6309\u7167\u6210\u7ee9\u964d\u5e8f\u6392\u5e8f\uff09",id:"19-\u67e5\u8be2\u6210\u7ee9\u8868\u7b2c-2-\u9875\u6570\u636e\u6bcf\u9875-5-\u6761\u6570\u636e\u6309\u7167\u6210\u7ee9\u964d\u5e8f\u6392\u5e8f",level:2},{value:"20. \u67e5\u8be2\u6210\u7ee9\u8868\u524d 5 \u6761\u6570\u636e\uff08\u6bcf\u9875 5 \u6761\u6570\u636e\uff0c\u6309\u7167\u6210\u7ee9\u964d\u5e8f\u6392\u5e8f\uff09",id:"20-\u67e5\u8be2\u6210\u7ee9\u8868\u524d-5-\u6761\u6570\u636e\u6bcf\u9875-5-\u6761\u6570\u636e\u6309\u7167\u6210\u7ee9\u964d\u5e8f\u6392\u5e8f",level:2},{value:"21. \u4fee\u6539 Course \u8868 Cname \u5b57\u6bb5\u7c7b\u578b\u4e3a nvarchar\uff0c\u957f\u5ea6\u4e3a 100",id:"21-\u4fee\u6539-course-\u8868-cname-\u5b57\u6bb5\u7c7b\u578b\u4e3a-nvarchar\u957f\u5ea6\u4e3a-100",level:2},{value:"22. \u4f7f\u7528 SQL \u8bed\u8a00\u590d\u5236 student \u8868\u7ed3\u6784\u548c\u6570\u636e\uff0c\u590d\u5236\u7684\u8868\u540d\u4e3a student_copy",id:"22-\u4f7f\u7528-sql-\u8bed\u8a00\u590d\u5236-student-\u8868\u7ed3\u6784\u548c\u6570\u636e\u590d\u5236\u7684\u8868\u540d\u4e3a-student_copy",level:2},{value:"23. \u67e5\u8be2\u6240\u6709\u7684\u5b66\u751f\u59d3\u540d\u548c\u8001\u5e08\u59d3\u540d\uff08\u4f7f\u7528 <code>union</code>\uff09",id:"23-\u67e5\u8be2\u6240\u6709\u7684\u5b66\u751f\u59d3\u540d\u548c\u8001\u5e08\u59d3\u540d\u4f7f\u7528-union",level:2},{value:"24. \u5217\u51fa\u6bcf\u4e2a\u5b66\u751f\u7684\u5b66\u751f\u7f16\u53f7\u3001\u59d3\u540d\u3001\u8bfe\u7a0b\u540d\u3001\u6388\u8bfe\u8001\u5e08\u59d3\u540d\uff08\u6ca1\u8bfe\u7a0b\u7684\u5b66\u751f\u4e0d\u7528\u5217\u51fa\uff09",id:"24-\u5217\u51fa\u6bcf\u4e2a\u5b66\u751f\u7684\u5b66\u751f\u7f16\u53f7\u59d3\u540d\u8bfe\u7a0b\u540d\u6388\u8bfe\u8001\u5e08\u59d3\u540d\u6ca1\u8bfe\u7a0b\u7684\u5b66\u751f\u4e0d\u7528\u5217\u51fa",level:2},{value:"25. \u67e5\u8be2\u8bfe\u7a0b\u7f16\u53f7\u201c02\u201d\u7684\u6210\u7ee9\u6bd4\u8bfe\u7a0b\u7f16\u53f7 \u201c01\u201d \u8bfe\u7a0b\u4f4e\u7684\u6240\u6709\u540c\u5b66\u7684\u5b66\u53f7\u3001\u59d3\u540d",id:"25-\u67e5\u8be2\u8bfe\u7a0b\u7f16\u53f702\u7684\u6210\u7ee9\u6bd4\u8bfe\u7a0b\u7f16\u53f7-01-\u8bfe\u7a0b\u4f4e\u7684\u6240\u6709\u540c\u5b66\u7684\u5b66\u53f7\u59d3\u540d",level:2}],S={toc:o};function E(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,s.Z)({},S,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u4ee3\u7801\u6267\u884c\u73af\u5883\u4e3a MySQL 8.0\uff0c\u6709\u4e00\u90e8\u5206\u4e0d\u53ef\u7167\u642c\u5165 SQL Server\u3002\u8f83\u4e3a\u660e\u663e\u7684\u4fbf\u662f\u5b58\u5728\u5206\u9875\u67e5\u8be2\u7684\u8bed\u53e5"))),(0,r.kt)("h2",{id:"1-\u67e5\u8be2\u5e73\u5747\u6210\u7ee9\u5927\u4e8e\u7b49\u4e8e-60-\u5206\u7684\u540c\u5b66\u7684\u5b66\u751f\u7f16\u53f7\u548c\u5b66\u751f\u59d3\u540d\u548c\u5e73\u5747\u6210\u7ee9"},"1. \u67e5\u8be2\u5e73\u5747\u6210\u7ee9\u5927\u4e8e\u7b49\u4e8e 60 \u5206\u7684\u540c\u5b66\u7684\u5b66\u751f\u7f16\u53f7\u548c\u5b66\u751f\u59d3\u540d\u548c\u5e73\u5747\u6210\u7ee9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.Sid AS \u5b66\u751f\u7f16\u53f7,\n    s.Sname AS \u5b66\u751f\u59d3\u540d,\n    AVG( sc.score ) AS \u5e73\u5747\u6210\u7ee9\nFROM\n    student AS s\n    JOIN sc ON s.Sid = sc.Sid\nGROUP BY\n    s.Sid\nHAVING\n    AVG( sc.score ) >= 60;\n")),(0,r.kt)("h2",{id:"2-\u67e5\u8be2\u5728-sc-\u8868\u5b58\u5728\u6210\u7ee9\u7684\u5b66\u751f\u4fe1\u606f"},"2. \u67e5\u8be2\u5728 SC \u8868\u5b58\u5728\u6210\u7ee9\u7684\u5b66\u751f\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.*\nFROM\n    student AS s\n    JOIN sc ON s.Sid = sc.Sid\nGROUP BY\n    s.Sid;\n")),(0,r.kt)("h2",{id:"3-\u67e5\u8be2\u6240\u6709\u540c\u5b66\u7684\u5b66\u751f\u7f16\u53f7\u5b66\u751f\u59d3\u540d\u9009\u8bfe\u603b\u6570\u6240\u6709\u8bfe\u7a0b\u7684\u603b\u6210\u7ee9\u6ca1\u6210\u7ee9\u7684\u663e\u793a\u4e3a-null-"},"3. \u67e5\u8be2\u6240\u6709\u540c\u5b66\u7684\u5b66\u751f\u7f16\u53f7\u3001\u5b66\u751f\u59d3\u540d\u3001\u9009\u8bfe\u603b\u6570\u3001\u6240\u6709\u8bfe\u7a0b\u7684\u603b\u6210\u7ee9\uff08\u6ca1\u6210\u7ee9\u7684\u663e\u793a\u4e3a null \uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.Sid AS \u5b66\u751f\u7f16\u53f7,\n    s.Sname AS \u5b66\u751f\u59d3\u540d,\n    ( SELECT COUNT(*) FROM sc WHERE s.Sid = sc.Sid ) AS \u9009\u8bfe\u603b\u6570,\n    ( SELECT SUM( sc.score ) FROM sc WHERE s.Sid = sc.Sid ) AS \u603b\u6210\u7ee9\nFROM\n    student AS s;\n")),(0,r.kt)("h2",{id:"4-\u67e5\u6709\u6210\u7ee9\u7684\u5b66\u751f\u4fe1\u606f"},"4. \u67e5\u6709\u6210\u7ee9\u7684\u5b66\u751f\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.*\nFROM\n    student AS s\n    JOIN sc ON s.Sid = sc.Sid\nGROUP BY\n    s.Sid;\n")),(0,r.kt)("h2",{id:"5-\u67e5\u8be2\u5b66\u8fc7\u5f20\u4e09\u8001\u5e08\u6388\u8bfe\u7684\u540c\u5b66\u7684\u4fe1\u606f"},"5. \u67e5\u8be2\u5b66\u8fc7\u300c\u5f20\u4e09\u300d\u8001\u5e08\u6388\u8bfe\u7684\u540c\u5b66\u7684\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.*\nFROM\n    student AS s\n    JOIN sc ON s.Sid = sc.Sid\nWHERE\n    sc.Cid IN (\n    SELECT\n        c.Cid\n    FROM\n        course AS c\n    WHERE\n    c.Tid = ( SELECT t.Tid FROM teacher AS t WHERE t.Tname = '\u5f20\u4e09' ));\n")),(0,r.kt)("h2",{id:"6-\u67e5\u8be2\u6ca1\u6709\u5b66\u5168\u6240\u6709\u8bfe\u7a0b\u7684\u5b66\u751f\u7684\u4fe1\u606f"},"6. \u67e5\u8be2\u6ca1\u6709\u5b66\u5168\u6240\u6709\u8bfe\u7a0b\u7684\u5b66\u751f\u7684\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    * \nFROM\n    student AS s \nWHERE\n    ( SELECT COUNT(*) FROM sc WHERE sc.Sid = s.Sid ) = ( SELECT COUNT(*) FROM course AS c );\n")),(0,r.kt)("h2",{id:"7-\u67e5\u8be2\u548c-01-\u53f7\u7684\u540c\u5b66\u5b66\u4e60\u7684\u8bfe\u7a0b\u5b8c\u5168\u76f8\u540c\u7684\u5176\u4ed6\u540c\u5b66\u7684\u4fe1\u606f"},'7. \u67e5\u8be2\u548c "01" \u53f7\u7684\u540c\u5b66\u5b66\u4e60\u7684\u8bfe\u7a0b\u5b8c\u5168\u76f8\u540c\u7684\u5176\u4ed6\u540c\u5b66\u7684\u4fe1\u606f'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    * \nFROM\n    student AS s \nWHERE\n    s.Sid != '01' \n    AND (\n    SELECT\n        COUNT(*) \n    FROM\n        sc \n    WHERE\n        sc.Sid = s.Sid \n        AND sc.Cid IN ( SELECT sc.Cid FROM sc WHERE sc.Sid = '01' ) \n    ) = ( SELECT COUNT(*) FROM sc WHERE sc.Sid = '01' );\n")),(0,r.kt)("h2",{id:"8-\u67e5\u8be2\u6ca1\u5b66\u8fc7-\u5f20\u4e09-\u8001\u5e08\u8bb2\u6388\u7684\u4efb\u4e00\u95e8\u8bfe\u7a0b\u7684\u5b66\u751f\u59d3\u540d"},'8. \u67e5\u8be2\u6ca1\u5b66\u8fc7 "\u5f20\u4e09" \u8001\u5e08\u8bb2\u6388\u7684\u4efb\u4e00\u95e8\u8bfe\u7a0b\u7684\u5b66\u751f\u59d3\u540d'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.Sname\nFROM\n    student AS s\nWHERE\n    0 = (\n    SELECT\n        COUNT(*)\n    FROM\n        sc\n    WHERE\n        sc.Sid = s.Sid\n        AND sc.Cid NOT IN (\n        SELECT\n            c.Cid\n        FROM\n            course AS c\n        WHERE\n        c.Tid = ( SELECT t.Tid FROM teacher AS t WHERE t.Tname = '\u5f20\u4e09' )));\n")),(0,r.kt)("h2",{id:"9-\u67e5\u8be2\u4e24\u95e8\u53ca\u5176\u4ee5\u4e0a\u4e0d\u53ca\u683c\u8bfe\u7a0b\u7684\u540c\u5b66\u7684\u5b66\u53f7\u59d3\u540d\u53ca\u5176\u5e73\u5747\u6210\u7ee9"},"9. \u67e5\u8be2\u4e24\u95e8\u53ca\u5176\u4ee5\u4e0a\u4e0d\u53ca\u683c\u8bfe\u7a0b\u7684\u540c\u5b66\u7684\u5b66\u53f7\uff0c\u59d3\u540d\u53ca\u5176\u5e73\u5747\u6210\u7ee9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.Sid AS \u5b66\u53f7,\n    s.Sname AS \u59d3\u540d,\n    ( SELECT AVG( sc.score ) FROM sc WHERE sc.Sid = s.Sid ) AS \u5e73\u5747\u6210\u7ee9\nFROM\n    student AS s\nWHERE\n    2 <= ( SELECT COUNT(*) FROM sc WHERE sc.Sid = s.Sid AND sc.score < 60 );\n")),(0,r.kt)("h2",{id:"10-\u68c0\u7d22-01-\u8bfe\u7a0b\u5206\u6570\u5c0f\u4e8e-60\u6309\u5206\u6570\u964d\u5e8f\u6392\u5217\u7684\u5b66\u751f\u4fe1\u606f\u548c"},'10. \u68c0\u7d22 "01" \u8bfe\u7a0b\u5206\u6570\u5c0f\u4e8e 60\uff0c\u6309\u5206\u6570\u964d\u5e8f\u6392\u5217\u7684\u5b66\u751f\u4fe1\u606f\u548c'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.*,\n    sc.score\nFROM\n    student AS s\n    JOIN sc ON s.Sid = sc.Sid\nWHERE\n    sc.Cid = '01'\n    AND sc.score < 60\nORDER BY\n    sc.score DESC;\n")),(0,r.kt)("h2",{id:"11-\u6309\u5e73\u5747\u6210\u7ee9\u4ece\u9ad8\u5230\u4f4e\u663e\u793a\u6240\u6709\u5b66\u751f\u7684\u6240\u6709\u8bfe\u7a0b\u7684\u6210\u7ee9\u4ee5\u53ca\u5e73\u5747\u6210\u7ee9"},"11. \u6309\u5e73\u5747\u6210\u7ee9\u4ece\u9ad8\u5230\u4f4e\u663e\u793a\u6240\u6709\u5b66\u751f\u7684\u6240\u6709\u8bfe\u7a0b\u7684\u6210\u7ee9\u4ee5\u53ca\u5e73\u5747\u6210\u7ee9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.*,\n    AVG( sc.score ) AS \u5e73\u5747\u6210\u7ee9\nFROM\n    student AS s\n    JOIN sc ON s.Sid = sc.Sid\nGROUP BY\n    s.Sid\nORDER BY\n    \u5e73\u5747\u6210\u7ee9 DESC;\n")),(0,r.kt)("h2",{id:"12-\u67e5\u8be2\u6210\u7ee9\u8868\u4e2d\u5404\u79d1\u6210\u7ee9\u524d\u4e09\u540d\u7684\u4fe1\u606f\u4ee5\u53ca\u6392\u540d"},"12. \u67e5\u8be2\u6210\u7ee9\u8868\u4e2d\u5404\u79d1\u6210\u7ee9\u524d\u4e09\u540d\u7684\u4fe1\u606f\u4ee5\u53ca\u6392\u540d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.*,\n    sc.Cid,\n    sc.score,\n    ( SELECT COUNT(DISTINCT t.score) FROM sc AS t WHERE t.Cid = sc.Cid AND t.score >= sc.score ) AS \u6392\u540d\nFROM\n    sc\n    JOIN student AS s ON sc.Sid = s.Sid\nWHERE\n    ( SELECT COUNT(*) FROM sc AS t WHERE t.Cid = sc.Cid AND t.score >= sc.score ) <= 3\nORDER BY\n    sc.Cid,\n    sc.score DESC;\n")),(0,r.kt)("h2",{id:"13-\u67e5\u8be2\u51fa\u53ea\u9009\u4fee\u4e24\u95e8\u8bfe\u7a0b\u7684\u5b66\u751f\u5b66\u53f7\u548c\u59d3\u540d"},"13. \u67e5\u8be2\u51fa\u53ea\u9009\u4fee\u4e24\u95e8\u8bfe\u7a0b\u7684\u5b66\u751f\u5b66\u53f7\u548c\u59d3\u540d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.sid AS \u5b66\u53f7,\n    s.Sname AS \u59d3\u540d \nFROM\n    student AS s \nWHERE\n    2 = ( SELECT COUNT(*) FROM sc WHERE sc.Sid = s.Sid );\n")),(0,r.kt)("h2",{id:"14-\u67e5\u8be2\u540d\u5b57\u4e2d\u542b\u6709\u98ce\u5b57\u7684\u5b66\u751f\u4fe1\u606f"},"14. \u67e5\u8be2\u540d\u5b57\u4e2d\u542b\u6709\u300c\u98ce\u300d\u5b57\u7684\u5b66\u751f\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    *\nFROM\n    student AS s\nWHERE\n    s.Sname LIKE '%\u98ce%';\n")),(0,r.kt)("h2",{id:"15-\u67e5\u8be2-1990-\u5e74\u51fa\u751f\u7684\u5b66\u751f\u4fe1\u606f"},"15. \u67e5\u8be2 1990 \u5e74\u51fa\u751f\u7684\u5b66\u751f\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    *\nFROM\n    student AS s\nWHERE\n    YEAR ( s.Sage ) = '1990';\n")),(0,r.kt)("h2",{id:"16-\u67e5\u8be2\u5404\u5b66\u751f\u7684\u59d3\u540d\u5e74\u9f84\u53ea\u6309\u5e74\u4efd\u6765\u8ba1\u7b97"},"16. \u67e5\u8be2\u5404\u5b66\u751f\u7684\u59d3\u540d\u3001\u5e74\u9f84\uff08\u53ea\u6309\u5e74\u4efd\u6765\u8ba1\u7b97\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.Sname,\n    YEAR ( NOW() ) - YEAR ( s.Sage ) AS \u5e74\u9f84\nFROM\n    student AS s;\n")),(0,r.kt)("h2",{id:"17-\u67e5\u8be2\u672c\u6708\u8fc7\u751f\u65e5\u7684\u5b66\u751f\u4fe1\u606f"},"17. \u67e5\u8be2\u672c\u6708\u8fc7\u751f\u65e5\u7684\u5b66\u751f\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    * \nFROM\n    student AS s \nWHERE\n    MONTH (NOW()) = MONTH ( s.Sage );\n")),(0,r.kt)("h2",{id:"18-\u67e5\u8be2\u4e0b\u4e0b\u6708\u8fc7\u751f\u65e5\u7684\u5b66\u751f\u4fe1\u606f"},"18. \u67e5\u8be2\u4e0b\u4e0b\u6708\u8fc7\u751f\u65e5\u7684\u5b66\u751f\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u8df3\u4e24\u6b21\n-- \u5927\u4e8e 10\uff0c\u5c31\u5f97\u8df3\u5230\u4e0b\u4e00\u5e74\nSELECT \n    * \nFROM \n    student AS s \nWHERE ( \n    CASE \n        WHEN MONTH ( NOW()) > 10 THEN (NOW()) - 12 \n        ELSE MONTH ( NOW()) \n    END \n) + 2 = MONTH ( s.Sage );\n")),(0,r.kt)("h2",{id:"19-\u67e5\u8be2\u6210\u7ee9\u8868\u7b2c-2-\u9875\u6570\u636e\u6bcf\u9875-5-\u6761\u6570\u636e\u6309\u7167\u6210\u7ee9\u964d\u5e8f\u6392\u5e8f"},"19. \u67e5\u8be2\u6210\u7ee9\u8868\u7b2c 2 \u9875\u6570\u636e\uff08\u6bcf\u9875 5 \u6761\u6570\u636e\uff0c\u6309\u7167\u6210\u7ee9\u964d\u5e8f\u6392\u5e8f\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    * \nFROM\n    sc \nORDER BY\n    sc.score DESC \nLIMIT 5,5;\n")),(0,r.kt)("h2",{id:"20-\u67e5\u8be2\u6210\u7ee9\u8868\u524d-5-\u6761\u6570\u636e\u6bcf\u9875-5-\u6761\u6570\u636e\u6309\u7167\u6210\u7ee9\u964d\u5e8f\u6392\u5e8f"},"20. \u67e5\u8be2\u6210\u7ee9\u8868\u524d 5 \u6761\u6570\u636e\uff08\u6bcf\u9875 5 \u6761\u6570\u636e\uff0c\u6309\u7167\u6210\u7ee9\u964d\u5e8f\u6392\u5e8f\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    *\nFROM\n    sc\nORDER BY\n    sc.score DESC\nLIMIT 5\n")),(0,r.kt)("h2",{id:"21-\u4fee\u6539-course-\u8868-cname-\u5b57\u6bb5\u7c7b\u578b\u4e3a-nvarchar\u957f\u5ea6\u4e3a-100"},"21. \u4fee\u6539 Course \u8868 Cname \u5b57\u6bb5\u7c7b\u578b\u4e3a nvarchar\uff0c\u957f\u5ea6\u4e3a 100"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7b54\u6848\u53ea\u5199 SQL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- MySQL\nALTER TABLE Course MODIFY Cname NVARCHAR(100);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- SQL Server\nALTER TABLE Course ALTER COLUMN Cname NVARCHAR(100);\n")),(0,r.kt)("h2",{id:"22-\u4f7f\u7528-sql-\u8bed\u8a00\u590d\u5236-student-\u8868\u7ed3\u6784\u548c\u6570\u636e\u590d\u5236\u7684\u8868\u540d\u4e3a-student_copy"},"22. \u4f7f\u7528 SQL \u8bed\u8a00\u590d\u5236 student \u8868\u7ed3\u6784\u548c\u6570\u636e\uff0c\u590d\u5236\u7684\u8868\u540d\u4e3a student_copy"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7b54\u6848\u53ea\u5199 SQL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- MySQL\nCREATE TABLE student_copy SELECT * FROM student;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- SQL Server\nSELECT * INTO student_copy FROM student;\n")),(0,r.kt)("h2",{id:"23-\u67e5\u8be2\u6240\u6709\u7684\u5b66\u751f\u59d3\u540d\u548c\u8001\u5e08\u59d3\u540d\u4f7f\u7528-union"},"23. \u67e5\u8be2\u6240\u6709\u7684\u5b66\u751f\u59d3\u540d\u548c\u8001\u5e08\u59d3\u540d\uff08\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h2"},"union"),"\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.Sname\nFROM\n    student AS s UNION\nSELECT\n    t.Tname\nFROM\n    teacher AS t;\n")),(0,r.kt)("h2",{id:"24-\u5217\u51fa\u6bcf\u4e2a\u5b66\u751f\u7684\u5b66\u751f\u7f16\u53f7\u59d3\u540d\u8bfe\u7a0b\u540d\u6388\u8bfe\u8001\u5e08\u59d3\u540d\u6ca1\u8bfe\u7a0b\u7684\u5b66\u751f\u4e0d\u7528\u5217\u51fa"},"24. \u5217\u51fa\u6bcf\u4e2a\u5b66\u751f\u7684\u5b66\u751f\u7f16\u53f7\u3001\u59d3\u540d\u3001\u8bfe\u7a0b\u540d\u3001\u6388\u8bfe\u8001\u5e08\u59d3\u540d\uff08\u6ca1\u8bfe\u7a0b\u7684\u5b66\u751f\u4e0d\u7528\u5217\u51fa\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.Sid,\n    s.Sname,\n    c.Cid,\n    c.Cname,\n    t.Tname\nFROM\n    sc\n    JOIN student AS s ON sc.Sid = s.Sid\n    JOIN course AS c ON sc.Cid = c.Cid\n    JOIN teacher AS t ON c.Tid = t.Tid;\n")),(0,r.kt)("h2",{id:"25-\u67e5\u8be2\u8bfe\u7a0b\u7f16\u53f702\u7684\u6210\u7ee9\u6bd4\u8bfe\u7a0b\u7f16\u53f7-01-\u8bfe\u7a0b\u4f4e\u7684\u6240\u6709\u540c\u5b66\u7684\u5b66\u53f7\u59d3\u540d"},"25. \u67e5\u8be2\u8bfe\u7a0b\u7f16\u53f7\u201c02\u201d\u7684\u6210\u7ee9\u6bd4\u8bfe\u7a0b\u7f16\u53f7 \u201c01\u201d \u8bfe\u7a0b\u4f4e\u7684\u6240\u6709\u540c\u5b66\u7684\u5b66\u53f7\u3001\u59d3\u540d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.Sid,\n    s.Sname \nFROM\n    student AS s \nWHERE\n    ( SELECT score FROM sc WHERE sc.Sid = s.Sid AND sc.Cid = '02' ) < ( SELECT score FROM sc WHERE sc.Sid = s.Sid AND sc.Cid = '01' );\n")))}E.isMDXComponent=!0}}]);