(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{129:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(137),m=t(147),c=t(134);var s=function(e){const{nextItem:a,prevItem:t}=e;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},a.title," \xbb"))))};a.default=function(e){const{content:a}=e,{frontMatter:t,metadata:n}=a;return r.a.createElement(l.a,{title:n.title,description:n.description},a&&r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(m.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},r.a.createElement(a,null)),(n.nextItem||n.prevItem)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(s,{nextItem:n.nextItem,prevItem:n.prevItem}))))))}},147:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(133),m=t.n(l),c=t(135),s=t(134),o=t(149),i=t(97),v=t.n(i);const g=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:l,isBlogPostPage:i=!1}=e,{date:u,permalink:E,tags:p}=n,{author:_,title:N}=t,d=t.author_url||t.authorURL,b=t.author_title||t.authorTitle,h=t.author_image_url||t.authorImageURL;return r.a.createElement("article",{className:i?void 0:"margin-bottom--xl"},(()=>{const e=i?"h1":"h2",a=u.substring(0,10).split("-"),t=a[0],n=g[parseInt(a[1],10)-1],l=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:m()("margin-bottom--sm",v.a.blogPostTitle)},i?N:r.a.createElement(s.a,{to:E},N)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("time",{dateTime:u,className:v.a.blogPostDate},n," ",l,", ",t)),r.a.createElement("div",{className:"avatar margin-bottom--md"},h&&r.a.createElement("a",{className:"avatar__photo-link",href:d,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:h,alt:_})),r.a.createElement("div",{className:"avatar__intro"},_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:d,target:"_blank",rel:"noreferrer noopener"},_)),r.a.createElement("small",{className:"avatar__subtitle"},b)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:o.a},a)),(p.length>0||l)&&r.a.createElement("footer",{className:"row margin-vert--lg"},p.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),p.map(({label:e,permalink:a})=>r.a.createElement(s.a,{key:a,className:"margin-horiz--sm",to:a},e))),l&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(s.a,{to:n.permalink,"aria-label":`Read more about ${N}`},r.a.createElement("strong",null,"Read More")))))}}}]);