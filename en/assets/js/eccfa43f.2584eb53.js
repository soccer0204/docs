"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[8520],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),l=a(6010),s=a(2466),i=a(6550),o=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,u]=h({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=o??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var g=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},s,{className:(0,l.Z)("tabs__item",N.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function f(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(f,(0,n.Z)({key:String(t)},e))}},5071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=(a(8209),a(4866)),s=a(5162);const i={sidebar_position:2},o="Linux (Debian, Ubuntu, Raspberry Pi)",u={unversionedId:"installation/linux",id:"installation/linux",title:"Linux (Debian, Ubuntu, Raspberry Pi)",description:"This guide is aimed specifically at APT-based distributions. For distributions using other package managers, please install using Docker or Manual Installation.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/installation/linux.mdx",sourceDirName:"installation",slug:"/installation/linux",permalink:"/en/docs/installation/linux",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/installation/linux.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installing evcc",permalink:"/en/docs/installation/"},next:{title:"macOS",permalink:"/en/docs/installation/macos"}},c={},p=[{value:"Installation Guide",id:"installation-guide",level:2},{value:"Upgrades",id:"upgrades",level:2},{value:"Downgrade",id:"downgrade",level:2},{value:"Managing the Service",id:"managing-the-service",level:2},{value:"Useful Commands",id:"useful-commands",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linux-debian-ubuntu-raspberry-pi"},"Linux (Debian, Ubuntu, Raspberry Pi)"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This guide is aimed specifically at APT-based distributions. For distributions using other package managers, please install using ",(0,r.kt)("a",{parentName:"p",href:"docker"},"Docker")," or ",(0,r.kt)("a",{parentName:"p",href:"manual"},"Manual Installation"),".")),(0,r.kt)("h2",{id:"installation-guide"},"Installation Guide"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'The "evcc" user is created during installation - please make sure this user doesn\'t already exist!')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open a terminal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install required dependencies:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the evcc APT repository:"))),(0,r.kt)(l.Z,{groupId:"release-type",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Release",label:"Release",default:!0,mdxType:"TabItem"},"Current stable release",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -1sLf \\\n  'https://dl.cloudsmith.io/public/evcc/stable/setup.deb.sh' \\\n  | sudo -E bash\n"))),(0,r.kt)(s.Z,{value:"Nightly",label:"Nightly",mdxType:"TabItem"},"Nightly release, with the latest (potentially unstable!) code",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -1sLf \\\n  'https://dl.cloudsmith.io/public/evcc/unstable/setup.deb.sh' \\\n  | sudo -E bash\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://cloudsmith.com"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/OSS%20hosting%20by-cloudsmith-blue?logo=cloudsmith&style=flat-square",alt:"Hosted By: Cloudsmith"}))),(0,r.kt)("p",{parentName:"admonition"},"We would like to thank ",(0,r.kt)("a",{parentName:"p",href:"https://cloudsmith.com"},"Cloudsmith")," for hosting the repository!\nCloudsmith provides services to support the development of free software and platforms.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Update the package list:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install evcc:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install -y evcc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start the evcc server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start evcc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now check the installation by opening a browser to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:7070"),". You should see the evcc web interface in demo mode.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stop the server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl stop evcc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can now start the configuration wizard - simply follow the prompts in your terminal!"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"evcc configure\n")),(0,r.kt)("p",{parentName:"li"},"Once all devices are configured, you can continue on."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Configuration wizard is not available under the Home Assistant environment.\nYou may find it easier to install evcc on another Windows or Linux system, use ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc configure")," there, and then copy the generated ",(0,r.kt)("em",{parentName:"p"},"evcc.yaml")," to the desired system.")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Advanced users (those with evcc experience & some technical know-how) might want to use the advanced configurator:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"evcc configure --advanced\n")),(0,r.kt)("p",{parentName:"admonition"},"This mode offers some further, more technically-involved options."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Test to make sure your new configuration works:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"evcc -c evcc.yaml\n")),(0,r.kt)("p",{parentName:"li"},"Open a browser and head to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:7070"),": the evcc interface should now show your own devices.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If everything's working, press ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL+C")," to stop the server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Move the generated configuration to its home:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mv evcc.yaml /etc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start evcc:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start evcc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go back to your browser and refresh to make sure everything's working as it should be!"))),(0,r.kt)("h2",{id:"upgrades"},"Upgrades"),(0,r.kt)("p",null,"To update to the latest version of evcc, follow this guide:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open a terminal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Update the package list:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upgrade evcc:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt --only-upgrade install -y evcc\n")))),(0,r.kt)("h2",{id:"downgrade"},"Downgrade"),(0,r.kt)("p",null,"If you need to go backwards for any reason, you can do so with this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"  sudo apt install evcc=x.xxx.x # Version Number\n")),(0,r.kt)("h2",{id:"managing-the-service"},"Managing the Service"),(0,r.kt)("p",null,"evcc runs as a background system service. Here's some useful commands to control it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status evcc # shows status\nsudo systemctl start evcc # start the service, if it isn't already running\nsudo systemctl stop evcc # stops the service\nsudo systemctl restart evcc # restart the service\nsudo systemctl enable evcc # sets the service to run at boot\nsudo systemctl disable evcc # stops the service running at boot\n")),(0,r.kt)("h2",{id:"useful-commands"},"Useful Commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Show the service status:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status evcc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Show all log entries since yesterday:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sudo journalctl -u evcc --since "yesterday"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Validate the meter configuration:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo evcc -l debug meter\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Validate the charger configuration:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo evcc -l debug charger\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Validate the vehicle configuration:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo evcc -l debug vehicle\n")))))}h.isMDXComponent=!0}}]);