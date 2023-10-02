/*!*************************************************************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/css/tailwind.css ***!
  \*************************************************************************************************************************/
@import url(../../../ css2 - 1);
/*!***************************************************************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/css/apexcharts.css ***!
  \***************************************************************************************************************************/
.apexcharts - canvas {
  position: relative;
  -webkit - user - select: none;
  -moz - user - select: none;
  user - select: none;
  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */
}


/* scrollbar is not visible by default for legend, hence forcing the visibility */
.apexcharts - canvas :: -webkit - scrollbar {
  -webkit - appearance: none;
  width: 6px;
}

.apexcharts - canvas :: -webkit - scrollbar - thumb {
  border - radius: 4px;
  background - color: rgba(0, 0, 0, .5);
  box - shadow: 0 0 1px rgba(255, 255, 255, .5);
  -webkit - box - shadow: 0 0 1px rgba(255, 255, 255, .5);
}


.apexcharts - inner {
  position: relative;
}

.apexcharts - text tspan {
  font - family: inherit;
}

.legend - mouseover - inactive {
  transition: 0.15s ease all;
  opacity: 0.20;
}

.apexcharts - series - collapsed {
  opacity: 0;
}

.apexcharts - tooltip {
  border - radius: 5px;
  box - shadow: 2px 2px 6px - 4px #999;
  cursor: default ;
  font - size: 14px;
  left: 62px;
  opacity: 0;
  pointer - events: none;
  position: absolute;
  top: 20px;
  display: flex;
  flex - direction: column;
  overflow: hidden;
  white - space: nowrap;
  z - index: 12;
  transition: 0.15s ease all;
}

.apexcharts - tooltip.apexcharts - active {
  opacity: 1;
  transition: 0.15s ease all;
}

.apexcharts - tooltip.apexcharts - theme - light {
  border: 1px solid #e3e3e3;
  background: rgba(255, 255, 255, 0.96);
}

.apexcharts - tooltip.apexcharts - theme - dark {
  color: #fff;
  background: rgba(30, 30, 30, 0.8);
}

.apexcharts - tooltip * {
  font- family: inherit;
}


.apexcharts - tooltip - title {
  padding: 6px;
  font - size: 15px;
  margin - bottom: 4px;
}

.apexcharts - tooltip.apexcharts - theme - light.apexcharts - tooltip - title {
  background: #ECEFF1;
  border - bottom: 1px solid #ddd;
}

.apexcharts - tooltip.apexcharts - theme - dark.apexcharts - tooltip - title {
  background: rgba(0, 0, 0, 0.7);
  border - bottom: 1px solid #333;
}

.apexcharts - tooltip - text - y - value,
.apexcharts - tooltip - text - goals - value,
.apexcharts - tooltip - text - z - value {
  display: inline - block;
  font - weight: 600;
  margin - left: 5px;
}

.apexcharts - tooltip - title: empty,
.apexcharts - tooltip - text - y - label: empty,
.apexcharts - tooltip - text - y - value: empty,
.apexcharts - tooltip - text - goals - label: empty,
.apexcharts - tooltip - text - goals - value: empty,
.apexcharts - tooltip - text - z - value:empty {
  display: none;
}

.apexcharts - tooltip - text - y - value,
.apexcharts - tooltip - text - goals - value,
.apexcharts - tooltip - text - z - value {
  font - weight: 600;
}

.apexcharts - tooltip - text - goals - label, 
.apexcharts - tooltip - text - goals - value {
  padding: 6px 0 5px;
}

.apexcharts - tooltip - goals - group, 
.apexcharts - tooltip - text - goals - label, 
.apexcharts - tooltip - text - goals - value {
  display: flex;
}
.apexcharts - tooltip - text - goals - label: not(: empty),
.apexcharts - tooltip - text - goals - value: not(: empty) {
  margin - top: -6px;
}

.apexcharts - tooltip - marker {
  width: 12px;
  height: 12px;
  position: relative;
  top: 0px;
  margin - right: 10px;
  border - radius: 50 %;
}

.apexcharts - tooltip - series - group {
  padding: 0 10px;
  display: none;
  text - align: left;
  justify - content: left;
  align - items: center;
}

.apexcharts - tooltip - series - group.apexcharts - active.apexcharts - tooltip - marker {
  opacity: 1;
}

.apexcharts - tooltip - series - group.apexcharts - active,
.apexcharts - tooltip - series - group: last - child {
  padding - bottom: 4px;
}

.apexcharts - tooltip - series - group - hidden {
  opacity: 0;
  height: 0;
  line - height: 0;
  padding: 0!important;
}

.apexcharts - tooltip - y - group {
  padding: 6px 0 5px;
}

.apexcharts - tooltip - box, .apexcharts - custom - tooltip {
  padding: 4px 8px;
}

.apexcharts - tooltip - boxPlot {
  display: flex;
  flex - direction: column - reverse;
}

.apexcharts - tooltip - box > div {
  margin: 4px 0;
}

.apexcharts - tooltip - box span.value {
  font - weight: bold;
}

.apexcharts - tooltip - rangebar {
  padding: 5px 8px;
}

.apexcharts - tooltip - rangebar.category {
  font - weight: 600;
  color: #777;
}

.apexcharts - tooltip - rangebar.series - name {
  font - weight: bold;
  display: block;
  margin - bottom: 5px;
}

.apexcharts - xaxistooltip {
  opacity: 0;
  padding: 9px 10px;
  pointer - events: none;
  color: #373d3f;
  font - size: 13px;
  text - align: center;
  border - radius: 2px;
  position: absolute;
  z - index: 10;
  background: #ECEFF1;
  border: 1px solid #90A4AE;
  transition: 0.15s ease all;
}

.apexcharts - xaxistooltip.apexcharts - theme - dark {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #fff;
}

.apexcharts - xaxistooltip: after,
.apexcharts - xaxistooltip:before {
  left: 50 %;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer - events: none;
}

.apexcharts - xaxistooltip:after {
  border - color: rgba(236, 239, 241, 0);
  border - width: 6px;
  margin - left: -6px;
}

.apexcharts - xaxistooltip:before {
  border - color: rgba(144, 164, 174, 0);
  border - width: 7px;
  margin - left: -7px;
}

.apexcharts - xaxistooltip - bottom: after,
.apexcharts - xaxistooltip - bottom:before {
  bottom: 100 %;
}

.apexcharts - xaxistooltip - top: after,
.apexcharts - xaxistooltip - top:before {
  top: 100 %;
}

.apexcharts - xaxistooltip - bottom:after {
  border - bottom - color: #ECEFF1;
}

.apexcharts - xaxistooltip - bottom:before {
  border - bottom - color: #90A4AE;
}

.apexcharts - xaxistooltip - bottom.apexcharts - theme - dark:after {
  border - bottom - color: rgba(0, 0, 0, 0.5);
}

.apexcharts - xaxistooltip - bottom.apexcharts - theme - dark:before {
  border - bottom - color: rgba(0, 0, 0, 0.5);
}

.apexcharts - xaxistooltip - top:after {
  border - top - color: #ECEFF1
}

.apexcharts - xaxistooltip - top:before {
  border - top - color: #90A4AE;
}

.apexcharts - xaxistooltip - top.apexcharts - theme - dark:after {
  border - top - color: rgba(0, 0, 0, 0.5);
}

.apexcharts - xaxistooltip - top.apexcharts - theme - dark:before {
  border - top - color: rgba(0, 0, 0, 0.5);
}

.apexcharts - xaxistooltip.apexcharts - active {
  opacity: 1;
  transition: 0.15s ease all;
}

.apexcharts - yaxistooltip {
  opacity: 0;
  padding: 4px 10px;
  pointer - events: none;
  color: #373d3f;
  font - size: 13px;
  text - align: center;
  border - radius: 2px;
  position: absolute;
  z - index: 10;
  background: #ECEFF1;
  border: 1px solid #90A4AE;
}

.apexcharts - yaxistooltip.apexcharts - theme - dark {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #fff;
}

.apexcharts - yaxistooltip: after,
.apexcharts - yaxistooltip:before {
  top: 50 %;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer - events: none;
}

.apexcharts - yaxistooltip:after {
  border - color: rgba(236, 239, 241, 0);
  border - width: 6px;
  margin - top: -6px;
}

.apexcharts - yaxistooltip:before {
  border - color: rgba(144, 164, 174, 0);
  border - width: 7px;
  margin - top: -7px;
}

.apexcharts - yaxistooltip - left: after,
.apexcharts - yaxistooltip - left:before {
  left: 100 %;
}

.apexcharts - yaxistooltip - right: after,
.apexcharts - yaxistooltip - right:before {
  right: 100 %;
}

.apexcharts - yaxistooltip - left:after {
  border - left - color: #ECEFF1;
}

.apexcharts - yaxistooltip - left:before {
  border - left - color: #90A4AE;
}

.apexcharts - yaxistooltip - left.apexcharts - theme - dark:after {
  border - left - color: rgba(0, 0, 0, 0.5);
}

.apexcharts - yaxistooltip - left.apexcharts - theme - dark:before {
  border - left - color: rgba(0, 0, 0, 0.5);
}

.apexcharts - yaxistooltip - right:after {
  border - right - color: #ECEFF1;
}

.apexcharts - yaxistooltip - right:before {
  border - right - color: #90A4AE;
}

.apexcharts - yaxistooltip - right.apexcharts - theme - dark:after {
  border - right - color: rgba(0, 0, 0, 0.5);
}

.apexcharts - yaxistooltip - right.apexcharts - theme - dark:before {
  border - right - color: rgba(0, 0, 0, 0.5);
}

.apexcharts - yaxistooltip.apexcharts - active {
  opacity: 1;
}

.apexcharts - yaxistooltip - hidden {
  display: none;
}

.apexcharts - xcrosshairs,
.apexcharts - ycrosshairs {
  pointer - events: none;
  opacity: 0;
  transition: 0.15s ease all;
}

.apexcharts - xcrosshairs.apexcharts - active,
.apexcharts - ycrosshairs.apexcharts - active {
  opacity: 1;
  transition: 0.15s ease all;
}

.apexcharts - ycrosshairs - hidden {
  opacity: 0;
}

.apexcharts - selection - rect {
  cursor: move;
}

.svg_select_boundingRect, .svg_select_points_rot {
  pointer - events: none;
  opacity: 0;
  visibility: hidden;
}
.apexcharts - selection - rect + g.svg_select_boundingRect,
.apexcharts - selection - rect + g.svg_select_points_rot {
  opacity: 0;
  visibility: hidden;
}

.apexcharts - selection - rect + g.svg_select_points_l,
.apexcharts - selection - rect + g.svg_select_points_r {
  cursor: ew - resize;
  opacity: 1;
  visibility: visible;
}

.svg_select_points {
  fill: #efefef;
  stroke: #333;
  rx: 2;
}

.apexcharts - svg.apexcharts - zoomable.hovering - zoom {
  cursor: crosshair
}

.apexcharts - svg.apexcharts - zoomable.hovering - pan {
  cursor: move
}

.apexcharts - zoom - icon,
.apexcharts - zoomin - icon,
.apexcharts - zoomout - icon,
.apexcharts - reset - icon,
.apexcharts - pan - icon,
.apexcharts - selection - icon,
.apexcharts - menu - icon,
.apexcharts - toolbar - custom - icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  line - height: 24px;
  color: #6E8192;
  text - align: center;
}

.apexcharts - zoom - icon svg,
.apexcharts - zoomin - icon svg,
.apexcharts - zoomout - icon svg,
.apexcharts - reset - icon svg,
.apexcharts - menu - icon svg {
  fill: #6E8192;
}

.apexcharts - selection - icon svg {
  fill: #444;
  transform: scale(0.76)
}

.apexcharts - theme - dark.apexcharts - zoom - icon svg,
.apexcharts - theme - dark.apexcharts - zoomin - icon svg,
.apexcharts - theme - dark.apexcharts - zoomout - icon svg,
.apexcharts - theme - dark.apexcharts - reset - icon svg,
.apexcharts - theme - dark.apexcharts - pan - icon svg,
.apexcharts - theme - dark.apexcharts - selection - icon svg,
.apexcharts - theme - dark.apexcharts - menu - icon svg,
.apexcharts - theme - dark.apexcharts - toolbar - custom - icon svg {
  fill: #f3f4f5;
}

.apexcharts - canvas.apexcharts - zoom - icon.apexcharts - selected svg,
.apexcharts - canvas.apexcharts - selection - icon.apexcharts - selected svg,
.apexcharts - canvas.apexcharts - reset - zoom - icon.apexcharts - selected svg {
  fill: #008FFB;
}

.apexcharts - theme - light.apexcharts - selection - icon: not(.apexcharts - selected):hover svg,
.apexcharts - theme - light.apexcharts - zoom - icon: not(.apexcharts - selected):hover svg,
.apexcharts - theme - light.apexcharts - zoomin - icon:hover svg,
.apexcharts - theme - light.apexcharts - zoomout - icon:hover svg,
.apexcharts - theme - light.apexcharts - reset - icon:hover svg,
.apexcharts - theme - light.apexcharts - menu - icon:hover svg {
  fill: #333;
}

.apexcharts - selection - icon,
.apexcharts - menu - icon {
  position: relative;
}

.apexcharts - reset - icon {
  margin - left: 5px;
}

.apexcharts - zoom - icon,
.apexcharts - reset - icon,
.apexcharts - menu - icon {
  transform: scale(0.85);
}

.apexcharts - zoomin - icon,
.apexcharts - zoomout - icon {
  transform: scale(0.7)
}

.apexcharts - zoomout - icon {
  margin - right: 3px;
}

.apexcharts - pan - icon {
  transform: scale(0.62);
  position: relative;
  left: 1px;
  top: 0px;
}

.apexcharts - pan - icon svg {
  fill: #fff;
  stroke: #6E8192;
  stroke - width: 2;
}

.apexcharts - pan - icon.apexcharts - selected svg {
  stroke: #008FFB;
}

.apexcharts - pan - icon: not(.apexcharts - selected):hover svg {
  stroke: #333;
}

.apexcharts - toolbar {
  position: absolute;
  z - index: 11;
  max - width: 176px;
  text - align: right;
  border - radius: 3px;
  padding: 0px 6px 2px 6px;
  display: flex;
  justify - content: space - between;
  align - items: center;
}

.apexcharts - menu {
  background: #fff;
  position: absolute;
  top: 100 %;
  border: 1px solid #ddd;
  border - radius: 3px;
  padding: 3px;
  right: 10px;
  opacity: 0;
  min - width: 110px;
  transition: 0.15s ease all;
  pointer - events: none;
}

.apexcharts - menu.apexcharts - menu - open {
  opacity: 1;
  pointer - events: all;
  transition: 0.15s ease all;
}

.apexcharts - menu - item {
  padding: 6px 7px;
  font - size: 12px;
  cursor: pointer;
}

.apexcharts - theme - light.apexcharts - menu - item:hover {
  background: #eee;
}

.apexcharts - theme - dark.apexcharts - menu {
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
}

@media screen and(min - width: 768px) {
  .apexcharts - canvas: hover.apexcharts - toolbar {
    opacity: 1;
  }
}

.apexcharts - datalabel.apexcharts - element - hidden {
  opacity: 0;
}

.apexcharts - pie - label,
.apexcharts - datalabels,
.apexcharts - datalabel,
.apexcharts - datalabel - label,
.apexcharts - datalabel - value {
  cursor: default ;
  pointer - events: none;
}

.apexcharts - pie - label - delay {
  opacity: 0;
  animation - name: opaque;
  animation - duration: 0.3s;
  animation - fill - mode: forwards;
  animation - timing - function: ease;
}

.apexcharts - canvas.apexcharts - element - hidden {
  opacity: 0;
}

.apexcharts - hide.apexcharts - series - points {
  opacity: 0;
}

.apexcharts - gridline,
.apexcharts - annotation - rect,
.apexcharts - tooltip.apexcharts - marker,
.apexcharts - area - series.apexcharts - area,
.apexcharts - line,
.apexcharts - zoom - rect,
.apexcharts - toolbar svg,
.apexcharts - area - series.apexcharts - series - markers.apexcharts - marker.no - pointer - events,
.apexcharts - line - series.apexcharts - series - markers.apexcharts - marker.no - pointer - events,
.apexcharts - radar - series path,
.apexcharts - radar - series polygon {
  pointer - events: none;
}


/* markers */

.apexcharts - marker {
  transition: 0.15s ease all;
}

@keyframes opaque {
  0 % {
    opacity: 0;
  }
  100 % {
    opacity: 1;
  }
}


/* Resize generated styles */

@keyframes resizeanim {
  from {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

.resize - triggers {
  animation: 1ms resizeanim;
  visibility: hidden;
  opacity: 0;
}

.resize - triggers,
.resize - triggers > div,
.contract - trigger:before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100 %;
  width: 100 %;
  overflow: hidden;
}

.resize - triggers > div {
  background: #eee;
  overflow: auto;
}

.contract - trigger:before {
  width: 200 %;
  height: 200 %;
}
/*!********************************************************************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/css/jsvectormap.min.css ***!
  \********************************************************************************************************************************/
svg{ touch - action: none } image, text,.jvm - zoomin,.jvm - zoomout{ -webkit - user - select: none; -moz - user - select: none; user - select: none }.jvm - container{ touch - action: none; position: relative; overflow: hidden; height: 100 %; width: 100 %}.jvm - tooltip{ border - radius: 3px; background - color:#5c5cff; font - family: sans - serif, Verdana; font - size: smaller; box - shadow: 1px 2px 12px rgba(0, 0, 0, 0.2); padding: 3px 5px; white - space: nowrap; position: absolute; display: none; color: #FFF }.jvm - tooltip.active{ display: block }.jvm - zoom - btn{ border - radius: 3px; background - color:#292929; padding: 3px; box - sizing: border - box; position: absolute; line - height: 10px; cursor: pointer; color: #FFF; height: 15px; width: 15px; left: 10px }.jvm - zoom - btn.jvm - zoomout{ top: 30px }.jvm - zoom - btn.jvm - zoomin{ top: 10px }.jvm - series - container{ right: 15px; position: absolute }.jvm - series - container.jvm - series - h{ bottom: 15px }.jvm - series - container.jvm - series - v{ top: 15px }.jvm - series - container.jvm - legend{ background - color: #fff; border: 1px solid #e5e7eb; margin - left: .75rem; border - radius: .25rem; border - color: #e5e7eb; padding: .6rem; box - shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); float: left }.jvm - series - container.jvm - legend.jvm - legend - title{ line - height: 1; border - bottom: 1px solid #e5e7eb; padding - bottom: .5rem; margin - bottom: .575rem; text - align: left }.jvm - series - container.jvm - legend.jvm - legend - inner{ overflow: hidden }.jvm - series - container.jvm - legend.jvm - legend - inner.jvm - legend - tick{ overflow: hidden; min - width: 40px }.jvm - series - container.jvm - legend.jvm - legend - inner.jvm - legend - tick: not(: first - child){ margin - top: .575rem }.jvm - series - container.jvm - legend.jvm - legend - inner.jvm - legend - tick.jvm - legend - tick - sample{ border - radius: 4px; margin - right: .65rem; height: 16px; width: 16px; float: left }.jvm - series - container.jvm - legend.jvm - legend - inner.jvm - legend - tick.jvm - legend - tick - text{ font - size: 12px; text - align: center; float: left }.jvm - line[animation = "true"]{ animation: jvm - line - animation 10s linear forwards infinite } @keyframes jvm - line - animation{from{ stroke - dashoffset: 250 } }

/*!*****************************************************************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/css/tailwind.css (1) ***!
  \*****************************************************************************************************************************/
/*
! tailwindcss v3.2.1 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
:: before,
::after {
  box - sizing: border - box; /* 1 */
  border - width: 0; /* 2 */
  border - style: solid; /* 2 */
  border - color: currentColor; /* 2 */
}

:: before,
::after {
  --tw - content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured `sans` font-family by default.
*/

html {
  line - height: 1.5; /* 1 */
  -webkit - text - size - adjust: 100 %; /* 2 */
  -moz - tab - size: 4; /* 3 */
  -o - tab - size: 4;
  tab - size: 4; /* 3 */
  font - family: ui - sans - serif, system - ui, -apple - system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans - serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
*/

body {
  margin: 0; /* 1 */
  line - height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border - top - width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr: where([title]) {
  -webkit - text - decoration: underline dotted;
  text - decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  font - size: inherit;
  font - weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text - decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
  strong {
  font - weight: bolder;
}

/*
1. Use the user's configured `mono` font family by default.
2. Correct the odd `em` font sizing in all browsers.
*/

code,
  kbd,
  samp,
  pre {
  font - family: ui - monospace, SFMono - Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font - size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font - size: 80 %;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
  sup {
  font - size: 75 %;
  line - height: 0;
  position: relative;
  vertical - align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text - indent: 0; /* 1 */
  border - color: inherit; /* 2 */
  border - collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
  input,
  optgroup,
  select,
  textarea {
  font - family: inherit; /* 1 */
  font - size: 100 %; /* 1 */
  font - weight: inherit; /* 1 */
  line - height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
  select {
  text - transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
  [type = 'button'],
  [type = 'reset'],
  [type = 'submit'] {
  -webkit - appearance: button; /* 1 */
  background - color: transparent; /* 2 */
  background - image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

: -moz - focusring {
  outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

: -moz - ui - invalid {
  box - shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical - align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

:: -webkit - inner - spin - button,
:: -webkit - outer - spin - button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type = 'search'] {
  -webkit - appearance: textfield; /* 1 */
  outline - offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

:: -webkit - search - decoration {
  -webkit - appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

:: -webkit - file - upload - button {
  -webkit - appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list - item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
  ul,
  menu {
  list - style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input:: -moz - placeholder, textarea:: -moz - placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input:: placeholder,
  textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
  [role = "button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default ;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
  display: block; /* 1 */
  vertical - align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
  video {
  max - width: 100 %;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

*, :: before, ::after{
  --tw - border - spacing - x: 0;
  --tw - border - spacing - y: 0;
  --tw - translate - x: 0;
  --tw - translate - y: 0;
  --tw - rotate: 0;
  --tw - skew - x: 0;
  --tw - skew - y: 0;
  --tw - scale - x: 1;
  --tw - scale - y: 1;
  --tw - pan - x: ;
  --tw - pan - y: ;
  --tw - pinch - zoom: ;
  --tw - scroll - snap - strictness: proximity;
  --tw - ordinal: ;
  --tw - slashed - zero: ;
  --tw - numeric - figure: ;
  --tw - numeric - spacing: ;
  --tw - numeric - fraction: ;
  --tw - ring - inset: ;
  --tw - ring - offset - width: 0px;
  --tw - ring - offset - color: #fff;
  --tw - ring - color: rgb(59 130 246 / 0.5);
  --tw - ring - offset - shadow: 0 0 #0000;
  --tw - ring - shadow: 0 0 #0000;
  --tw - shadow: 0 0 #0000;
  --tw - shadow - colored: 0 0 #0000;
  --tw - blur: ;
  --tw - brightness: ;
  --tw - contrast: ;
  --tw - grayscale: ;
  --tw - hue - rotate: ;
  --tw - invert: ;
  --tw - saturate: ;
  --tw - sepia: ;
  --tw - drop - shadow: ;
  --tw - backdrop - blur: ;
  --tw - backdrop - brightness: ;
  --tw - backdrop - contrast: ;
  --tw - backdrop - grayscale: ;
  --tw - backdrop - hue - rotate: ;
  --tw - backdrop - invert: ;
  --tw - backdrop - opacity: ;
  --tw - backdrop - saturate: ;
  --tw - backdrop - sepia: ;
}

::backdrop{
  --tw - border - spacing - x: 0;
  --tw - border - spacing - y: 0;
  --tw - translate - x: 0;
  --tw - translate - y: 0;
  --tw - rotate: 0;
  --tw - skew - x: 0;
  --tw - skew - y: 0;
  --tw - scale - x: 1;
  --tw - scale - y: 1;
  --tw - pan - x: ;
  --tw - pan - y: ;
  --tw - pinch - zoom: ;
  --tw - scroll - snap - strictness: proximity;
  --tw - ordinal: ;
  --tw - slashed - zero: ;
  --tw - numeric - figure: ;
  --tw - numeric - spacing: ;
  --tw - numeric - fraction: ;
  --tw - ring - inset: ;
  --tw - ring - offset - width: 0px;
  --tw - ring - offset - color: #fff;
  --tw - ring - color: rgb(59 130 246 / 0.5);
  --tw - ring - offset - shadow: 0 0 #0000;
  --tw - ring - shadow: 0 0 #0000;
  --tw - shadow: 0 0 #0000;
  --tw - shadow - colored: 0 0 #0000;
  --tw - blur: ;
  --tw - brightness: ;
  --tw - contrast: ;
  --tw - grayscale: ;
  --tw - hue - rotate: ;
  --tw - invert: ;
  --tw - saturate: ;
  --tw - sepia: ;
  --tw - drop - shadow: ;
  --tw - backdrop - blur: ;
  --tw - backdrop - brightness: ;
  --tw - backdrop - contrast: ;
  --tw - backdrop - grayscale: ;
  --tw - backdrop - hue - rotate: ;
  --tw - backdrop - invert: ;
  --tw - backdrop - opacity: ;
  --tw - backdrop - saturate: ;
  --tw - backdrop - sepia: ;
}
.container{
  width: 100 %;
  margin - right: auto;
  margin - left: auto;
  padding - right: 16px;
  padding - left: 16px;
}
@media(min - width: 400px) {

  .container{
    max - width: 400px;
  }
}
@media(min - width: 540px) {

  .container{
    max - width: 540px;
  }
}
@media(min - width: 720px) {

  .container{
    max - width: 720px;
  }
}
@media(min - width: 960px) {

  .container{
    max - width: 960px;
  }
}
@media(min - width: 1140px) {

  .container{
    max - width: 1140px;
  }
}
@media(min - width: 1320px) {

  .container{
    max - width: 1320px;
  }
}
.sr - only{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white - space: nowrap;
  border - width: 0;
}
.visible{
  visibility: visible;
}
.fixed{
  position: fixed;
}
.absolute{
  position: absolute;
}
.relative{
  position: relative;
}
.right - 4{
  right: 1rem;
}
.top - 1\/2{
top: 50 %;
}
.left - 5{
  left: 1.25rem;
}
.top - 5{
  top: 1.25rem;
}
.top - 0{
  top: 0px;
}
.left - 0{
  left: 0px;
}
.right - 0{
  right: 0px;
}
.bottom - 0{
  bottom: 0px;
}
.-top - 5{
  top: -1.25rem;
}
.-right - 5{
  right: -1.25rem;
}
.-bottom - 5{
  bottom: -1.25rem;
}
.-left - 5{
  left: -1.25rem;
}
.top - full{
  top: 100 %;
}
.-top -\[6px\]{
  top: -6px;
}
.left - 8{
  left: 2rem;
}
.-top - 1{
  top: -0.25rem;
}
.-right - 1{
  right: -0.25rem;
}
.z - 20{
  z - index: 20;
}
.z - 10{
  z - index: 10;
}
.-z - 10{
  z - index: -10;
}
.z -\[999999\]{
  z - index: 999999;
}
.order - last{
  order: 9999;
}
.mx - auto{
  margin - left: auto;
  margin - right: auto;
}
.-mx - 4{
  margin - left: -1rem;
  margin - right: -1rem;
}
.-mx - 3{
  margin - left: -0.75rem;
  margin - right: -0.75rem;
}
.-mx - 1{
  margin - left: -0.25rem;
  margin - right: -0.25rem;
}
.mx -\[1px\]{
  margin - left: 1px;
  margin - right: 1px;
}
.-mx -\[6px\]{
  margin - left: -6px;
  margin - right: -6px;
}
.mx - 3{
  margin - left: 0.75rem;
  margin - right: 0.75rem;
}
.my -\[6px\]{
  margin - top: 6px;
  margin - bottom: 6px;
}
.mb - 12{
  margin - bottom: 3rem;
}
.mb - 3{
  margin - bottom: 0.75rem;
}
.mb - 8{
  margin - bottom: 2rem;
}
.mt -\[-2px\]{
  margin - top: -2px;
}
.mb - 6{
  margin - bottom: 1.5rem;
}
.mr - 4{
  margin - right: 1rem;
}
.mb - 14{
  margin - bottom: 3.5rem;
}
.mb - 5{
  margin - bottom: 1.25rem;
}
.mb - 7{
  margin - bottom: 1.75rem;
}
.mr - 3{
  margin - right: 0.75rem;
}
.mb - 10{
  margin - bottom: 2.5rem;
}
.mb - 4{
  margin - bottom: 1rem;
}
.mt - 3{
  margin - top: 0.75rem;
}
.mb - 24{
  margin - bottom: 6rem;
}
.mb -\[60px\]{
  margin - bottom: 60px;
}
.mb - 1{
  margin - bottom: 0.25rem;
}
.mt - 10{
  margin - top: 2.5rem;
}
.mb - 2{
  margin - bottom: 0.5rem;
}
.mr - 16{
  margin - right: 4rem;
}
.mr - 6{
  margin - right: 1.5rem;
}
.mr - 5{
  margin - right: 1.25rem;
}
.mr - 20{
  margin - right: 5rem;
}
.ml - auto{
  margin - left: auto;
}
.mt - 2{
  margin - top: 0.5rem;
}
.mb - 9{
  margin - bottom: 2.25rem;
}
.mr - 1{
  margin - right: 0.25rem;
}
.mb - 16{
  margin - bottom: 4rem;
}
.mt - 5{
  margin - top: 1.25rem;
}
.block{
  display: block;
}
.inline - block{
  display: inline - block;
}
.inline{
  display: inline;
}
.flex{
  display: flex;
}
.inline - flex{
  display: inline - flex;
}
.table{
  display: table;
}
.grid{
  display: grid;
}
.hidden{
  display: none;
}
.h -\[10px\]{
  height: 10px;
}
.h - 5{
  height: 1.25rem;
}
.h -\[48px\]{
  height: 48px;
}
.h - 12{
  height: 3rem;
}
.h - 11{
  height: 2.75rem;
}
.h - full{
  height: 100 %;
}
.h - 6{
  height: 1.5rem;
}
.h -\[370px\]{
  height: 370px;
}
.h -\[223px\]{
  height: 223px;
}
.h - 1{
  height: 0.25rem;
}
.h - auto{
  height: auto;
}
.h - 10{
  height: 2.5rem;
}
.h - 20{
  height: 5rem;
}
.h -\[14px\]{
  height: 14px;
}
.h -\[70px\]{
  height: 70px;
}
.h - 2{
  height: 0.5rem;
}
.h -\[2px\]{
  height: 2px;
}
.h - 3{
  height: 0.75rem;
}
.h - 4{
  height: 1rem;
}
.h - screen{
  height: 100vh;
}
.h - 16{
  height: 4rem;
}
.w - full{
  width: 100 %;
}
.w -\[10px\]{
  width: 10px;
}
.w - 5{
  width: 1.25rem;
}
.w - 11{
  width: 2.75rem;
}
.w - 6{
  width: 1.5rem;
}
.w - 24{
  width: 6rem;
}
.w - 10{
  width: 2.5rem;
}
.w - 1\/3{
width: 33.333333 %;
}
.w -\[84\%\]{
  width: 84 %;
}
.w -\[50\%\]{
  width: 50 %;
}
.w -\[40\%\]{
  width: 40 %;
}
.w -\[20\%\]{
  width: 20 %;
}
.w -\[10\%\]{
  width: 10 %;
}
.w -\[70px\]{
  width: 70px;
}
.w - 2{
  width: 0.5rem;
}
.w - 60{
  width: 15rem;
}
.w -\[30px\]{
  width: 30px;
}
.w - 3{
  width: 0.75rem;
}
.w - 4{
  width: 1rem;
}
.w -\[330px\]{
  width: 330px;
}
.w - screen{
  width: 100vw;
}
.w - 16{
  width: 4rem;
}
.min - w -\[300px\]{
  min - width: 300px;
}
.min - w -\[90px\]{
  min - width: 90px;
}
.min - w -\[150px\]{
  min - width: 150px;
}
.min - w -\[140px\]{
  min - width: 140px;
}
.min - w -\[165px\]{
  min - width: 165px;
}
.max - w -\[445px\]{
  max - width: 445px;
}
.max - w -\[48px\]{
  max - width: 48px;
}
.max - w -\[420px\]{
  max - width: 420px;
}
.max - w -\[180px\]{
  max - width: 180px;
}
.max - w -\[510px\]{
  max - width: 510px;
}
.max - w -\[300px\]{
  max - width: 300px;
}
.max - w -\[465px\]{
  max - width: 465px;
}
.max - w -\[400px\]{
  max - width: 400px;
}
.max - w -\[80px\]{
  max - width: 80px;
}
.max - w -\[360px\]{
  max - width: 360px;
}
.max - w - full{
  max - width: 100 %;
}
.max - w -\[770px\]{
  max - width: 770px;
}
.max - w -\[270px\]{
  max - width: 270px;
}
.max - w -\[250px\]{
  max - width: 250px;
}
.max - w -\[200px\]{
  max - width: 200px;
}
.max - w -\[40px\]{
  max - width: 40px;
}
.table - auto{
  table - layout: auto;
}
.-translate - y - 1\/2{
--tw - translate - y: -50 %;
transform: translate(var(--tw - translate - x), var(--tw - translate - y)) rotate(var(--tw - rotate)) skewX(var(--tw - skew - x)) skewY(var(--tw - skew - y)) scaleX(var(--tw - scale - x)) scaleY(var(--tw - scale - y));
}
.rotate - 45{
  --tw - rotate: 45deg;
  transform: translate(var(--tw - translate - x), var(--tw - translate - y)) rotate(var(--tw - rotate)) skewX(var(--tw - skew - x)) skewY(var(--tw - skew - y)) scaleX(var(--tw - scale - x)) scaleY(var(--tw - scale - y));
}
.transform{
  transform: translate(var(--tw - translate - x), var(--tw - translate - y)) rotate(var(--tw - rotate)) skewX(var(--tw - skew - x)) skewY(var(--tw - skew - y)) scaleX(var(--tw - scale - x)) scaleY(var(--tw - scale - y));
}
@keyframes spin{

  to{
    transform: rotate(360deg);
  }
}
.animate - spin{
  animation: spin 1s linear infinite;
}
.cursor - pointer{
  cursor: pointer;
}
.select - none{
  -webkit - user - select: none;
  -moz - user - select: none;
  user - select: none;
}
.resize - none{
  resize: none;
}
.resize{
  resize: both;
}
.appearance - none{
  -webkit - appearance: none;
  -moz - appearance: none;
  appearance: none;
}
.flex - wrap{
  flex - wrap: wrap;
}
.items - end{
  align - items: flex - end;
}
.items - center{
  align - items: center;
}
.justify - end{
  justify - content: flex - end;
}
.justify - center{
  justify - content: center;
}
.justify - between{
  justify - content: space - between;
}
.space - x - 3 > : not([hidden]) ~ : not([hidden]){
  --tw - space - x - reverse: 0;
  margin - right: calc(0.75rem * var(--tw - space - x - reverse));
  margin - left: calc(0.75rem * calc(1 - var(--tw - space - x - reverse)));
}
.space - x - 4 > : not([hidden]) ~ : not([hidden]){
  --tw - space - x - reverse: 0;
  margin - right: calc(1rem * var(--tw - space - x - reverse));
  margin - left: calc(1rem * calc(1 - var(--tw - space - x - reverse)));
}
.space - y - 4 > : not([hidden]) ~ : not([hidden]){
  --tw - space - y - reverse: 0;
  margin - top: calc(1rem * calc(1 - var(--tw - space - y - reverse)));
  margin - bottom: calc(1rem * var(--tw - space - y - reverse));
}
.space - y - 3 > : not([hidden]) ~ : not([hidden]){
  --tw - space - y - reverse: 0;
  margin - top: calc(0.75rem * calc(1 - var(--tw - space - y - reverse)));
  margin - bottom: calc(0.75rem * var(--tw - space - y - reverse));
}
.overflow - hidden{
  overflow: hidden;
}
.overflow - x - auto{
  overflow - x: auto;
}
.truncate{
  overflow: hidden;
  text - overflow: ellipsis;
  white - space: nowrap;
}
.whitespace - nowrap{
  white - space: nowrap;
}
.rounded - lg{
  border - radius: 0.5rem;
}
.rounded{
  border - radius: 0.25rem;
}
.rounded - full{
  border - radius: 9999px;
}
.rounded - md{
  border - radius: 0.375rem;
}
.rounded - xl{
  border - radius: 0.75rem;
}
.rounded - sm{
  border - radius: 0.125rem;
}
.border{
  border - width: 1px;
}
.border -\[1\.5px\]{
  border - width: 1.5px;
}
.border -\[\.5px\]{
  border - width: .5px;
}
.border - 2{
  border - width: 2px;
}
.border - 4{
  border - width: 4px;
}
.border - y{
  border - top - width: 1px;
  border - bottom - width: 1px;
}
.border - r - 2{
  border - right - width: 2px;
}
.border - b - 2{
  border - bottom - width: 2px;
}
.border - b{
  border - bottom - width: 1px;
}
.border - t{
  border - top - width: 1px;
}
.border - r{
  border - right - width: 1px;
}
.border - l{
  border - left - width: 1px;
}
.border - r - 0{
  border - right - width: 0px;
}
.border - b - 0{
  border - bottom - width: 0px;
}
.border - solid{
  border - style: solid;
}
.border - light{
  --tw - border - opacity: 1;
  border - color: rgb(239 239 239 / var(--tw - border - opacity));
}
.border - form - stroke{
  --tw - border - opacity: 1;
  border - color: rgb(224 224 224 / var(--tw - border - opacity));
}
.border - body - color{
  --tw - border - opacity: 1;
  border - color: rgb(99 115 129 / var(--tw - border - opacity));
}
.border - stroke{
  --tw - border - opacity: 1;
  border - color: rgb(231 231 231 / var(--tw - border - opacity));
}
.border -\[\#e7e7e7\]{
  --tw - border - opacity: 1;
  border - color: rgb(231 231 231 / var(--tw - border - opacity));
}
.border - primary{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
}
.border - transparent{
  border - color: transparent;
}
.border - t - transparent{
  border - top - color: transparent;
}
.bg -\[\#fafafa\]{
  --tw - bg - opacity: 1;
  background - color: rgb(250 250 250 / var(--tw - bg - opacity));
}
.bg - white{
  --tw - bg - opacity: 1;
  background - color: rgb(255 255 255 / var(--tw - bg - opacity));
}
.bg - transparent{
  background - color: transparent;
}
.bg - black{
  --tw - bg - opacity: 1;
  background - color: rgb(33 43 54 / var(--tw - bg - opacity));
}
.bg -\[\#f9f9f9\]{
  --tw - bg - opacity: 1;
  background - color: rgb(249 249 249 / var(--tw - bg - opacity));
}
.bg - primary{
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}
.bg - red - 600{
  --tw - bg - opacity: 1;
  background - color: rgb(220 38 38 / var(--tw - bg - opacity));
}
.bg - secondary{
  --tw - bg - opacity: 1;
  background - color: rgb(19 194 150 / var(--tw - bg - opacity));
}
.bg - body - color{
  --tw - bg - opacity: 1;
  background - color: rgb(99 115 129 / var(--tw - bg - opacity));
}
.bg -\[\#f4f7ff\]{
  --tw - bg - opacity: 1;
  background - color: rgb(244 247 255 / var(--tw - bg - opacity));
}
.bg -\[\#F4F7FF\]{
  --tw - bg - opacity: 1;
  background - color: rgb(244 247 255 / var(--tw - bg - opacity));
}
.bg -\[\#FFA645\]{
  --tw - bg - opacity: 1;
  background - color: rgb(255 166 69 / var(--tw - bg - opacity));
}
.bg - danger{
  --tw - bg - opacity: 1;
  background - color: rgb(220 53 69 / var(--tw - bg - opacity));
}
.bg - opacity -\[15\%\]{
  --tw - bg - opacity: 15 %;
}
.fill - current{
  fill: currentColor;
}
.stroke - current{
  stroke: currentColor;
}
.object - cover{
  -o - object - fit: cover;
  object - fit: cover;
}
.object - center{
  -o - object - position: center;
  object - position: center;
}
.p - 6{
  padding: 1.5rem;
}
.p - 5{
  padding: 1.25rem;
}
.p - 3{
  padding: 0.75rem;
}
.p - 4{
  padding: 1rem;
}
.p - 8{
  padding: 2rem;
}
.py - 4{
  padding - top: 1rem;
  padding - bottom: 1rem;
}
.px - 4{
  padding - left: 1rem;
  padding - right: 1rem;
}
.px - 3{
  padding - left: 0.75rem;
  padding - right: 0.75rem;
}
.py -\[14px\]{
  padding - top: 14px;
  padding - bottom: 14px;
}
.px - 6{
  padding - left: 1.5rem;
  padding - right: 1.5rem;
}
.px - 5{
  padding - left: 1.25rem;
  padding - right: 1.25rem;
}
.px - 1{
  padding - left: 0.25rem;
  padding - right: 0.25rem;
}
.py - 9{
  padding - top: 2.25rem;
  padding - bottom: 2.25rem;
}
.px - 10{
  padding - left: 2.5rem;
  padding - right: 2.5rem;
}
.py - 3{
  padding - top: 0.75rem;
  padding - bottom: 0.75rem;
}
.px - 8{
  padding - left: 2rem;
  padding - right: 2rem;
}
.py - 1{
  padding - top: 0.25rem;
  padding - bottom: 0.25rem;
}
.px -\[6px\]{
  padding - left: 6px;
  padding - right: 6px;
}
.py - 10{
  padding - top: 2.5rem;
  padding - bottom: 2.5rem;
}
.py -\[10px\]{
  padding - top: 10px;
  padding - bottom: 10px;
}
.py - 7{
  padding - top: 1.75rem;
  padding - bottom: 1.75rem;
}
.py - 2{
  padding - top: 0.5rem;
  padding - bottom: 0.5rem;
}
.py - 8{
  padding - top: 2rem;
  padding - bottom: 2rem;
}
.py - 24{
  padding - top: 6rem;
  padding - bottom: 6rem;
}
.py -\[6px\]{
  padding - top: 6px;
  padding - bottom: 6px;
}
.py - 6{
  padding - top: 1.5rem;
  padding - bottom: 1.5rem;
}
.px - 2{
  padding - left: 0.5rem;
  padding - right: 0.5rem;
}
.py - 5{
  padding - top: 1.25rem;
  padding - bottom: 1.25rem;
}
.pt - 10{
  padding - top: 2.5rem;
}
.pt - 24{
  padding - top: 6rem;
}
.pb - 20{
  padding - bottom: 5rem;
}
.pt - 5{
  padding - top: 1.25rem;
}
.pb -\[90px\]{
  padding - bottom: 90px;
}
.pt - 6{
  padding - top: 1.5rem;
}
.pb - 8{
  padding - bottom: 2rem;
}
.pt - 4{
  padding - top: 1rem;
}
.pb - 6{
  padding - bottom: 1.5rem;
}
.pt - 20{
  padding - top: 5rem;
}
.pb - 14{
  padding - bottom: 3.5rem;
}
.pb - 12{
  padding - bottom: 3rem;
}
.pb - 10{
  padding - bottom: 2.5rem;
}
.pb -\[120px\]{
  padding - bottom: 120px;
}
.pr - 1{
  padding - right: 0.25rem;
}
.pl - 2{
  padding - left: 0.5rem;
}
.pr - 2{
  padding - right: 0.5rem;
}
.pb - 3{
  padding - bottom: 0.75rem;
}
.pt - 3{
  padding - top: 0.75rem;
}
.pl - 5{
  padding - left: 1.25rem;
}
.pr - 11{
  padding - right: 2.75rem;
}
.pb - 5{
  padding - bottom: 1.25rem;
}
.pt -\[60px\]{
  padding - top: 60px;
}
.pt -\[70px\]{
  padding - top: 70px;
}
.pr - 4{
  padding - right: 1rem;
}
.pr - 3{
  padding - right: 0.75rem;
}
.pr -\[70px\]{
  padding - right: 70px;
}
.pb - 4{
  padding - bottom: 1rem;
}
.text - left{
  text - align: left;
}
.text - center{
  text - align: center;
}
.text - right{
  text - align: right;
}
.text - base{
  font - size: 1rem;
  line - height: 1.5rem;
}
.text - 4xl{
  font - size: 2.25rem;
  line - height: 2.5rem;
}
.text - 2xl{
  font - size: 1.5rem;
  line - height: 2rem;
}
.text - xl{
  font - size: 1.25rem;
  line - height: 1.75rem;
}
.text - sm{
  font - size: 0.875rem;
  line - height: 1.25rem;
}
.text - lg{
  font - size: 1.125rem;
  line - height: 1.75rem;
}
.text - 3xl{
  font - size: 1.875rem;
  line - height: 2.25rem;
}
.text - xs{
  font - size: 0.75rem;
  line - height: 1rem;
}
.text -\[10px\]{
  font - size: 10px;
}
.font - semibold{
  font - weight: 600;
}
.font - bold{
  font - weight: 700;
}
.font - medium{
  font - weight: 500;
}
.font - normal{
  font - weight: 400;
}
.leading - snug{
  line - height: 1.375;
}
.\!leading - tight{
  line - height: 1.25!important;
}
.leading - loose{
  line - height: 2;
}
.leading - tight{
  line - height: 1.25;
}
.leading - relaxed{
  line - height: 1.625;
}
.text - black{
  --tw - text - opacity: 1;
  color: rgb(33 43 54 / var(--tw - text - opacity));
}
.text - body - color{
  --tw - text - opacity: 1;
  color: rgb(99 115 129 / var(--tw - text - opacity));
}
.text - primary{
  --tw - text - opacity: 1;
  color: rgb(48 86 211 / var(--tw - text - opacity));
}
.text - white{
  --tw - text - opacity: 1;
  color: rgb(255 255 255 / var(--tw - text - opacity));
}
.text -\[\#838995\]{
  --tw - text - opacity: 1;
  color: rgb(131 137 149 / var(--tw - text - opacity));
}
.text - dark{
  --tw - text - opacity: 1;
  color: rgb(9 14 52 / var(--tw - text - opacity));
}
.text - red - 600{
  --tw - text - opacity: 1;
  color: rgb(220 38 38 / var(--tw - text - opacity));
}
.text - secondary{
  --tw - text - opacity: 1;
  color: rgb(19 194 150 / var(--tw - text - opacity));
}
.text - danger{
  --tw - text - opacity: 1;
  color: rgb(220 53 69 / var(--tw - text - opacity));
}
.line - through{
  text - decoration - line: line - through;
}
.placeholder - body - color:: -moz - placeholder{
  --tw - placeholder - opacity: 1;
  color: rgb(99 115 129 / var(--tw - placeholder - opacity));
}
.placeholder - body - color::placeholder{
  --tw - placeholder - opacity: 1;
  color: rgb(99 115 129 / var(--tw - placeholder - opacity));
}
.placeholder -\[\#9699A6\]:: -moz - placeholder{
  --tw - placeholder - opacity: 1;
  color: rgb(150 153 166 / var(--tw - placeholder - opacity));
}
.placeholder -\[\#9699A6\]::placeholder{
  --tw - placeholder - opacity: 1;
  color: rgb(150 153 166 / var(--tw - placeholder - opacity));
}
.opacity - 0{
  opacity: 0;
}
.opacity - 60{
  opacity: 0.6;
}
.shadow - card{
  --tw - shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
  --tw - shadow - colored: 0px 1px 3px var(--tw - shadow - color);
  box - shadow: var(--tw - ring - offset - shadow, 0 0 #0000), var(--tw - ring - shadow, 0 0 #0000), var(--tw - shadow);
}
.shadow - md{
  --tw - shadow: 0 4px 6px - 1px rgb(0 0 0 / 0.1), 0 2px 4px - 2px rgb(0 0 0 / 0.1);
  --tw - shadow - colored: 0 4px 6px - 1px var(--tw - shadow - color), 0 2px 4px - 2px var(--tw - shadow - color);
  box - shadow: var(--tw - ring - offset - shadow, 0 0 #0000), var(--tw - ring - shadow, 0 0 #0000), var(--tw - shadow);
}
.shadow - input{
  --tw - shadow: 0px 7px 20px rgba(0, 0, 0, 0.03);
  --tw - shadow - colored: 0px 7px 20px var(--tw - shadow - color);
  box - shadow: var(--tw - ring - offset - shadow, 0 0 #0000), var(--tw - ring - shadow, 0 0 #0000), var(--tw - shadow);
}
.shadow{
  --tw - shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px - 1px rgb(0 0 0 / 0.1);
  --tw - shadow - colored: 0 1px 3px 0 var(--tw - shadow - color), 0 1px 2px - 1px var(--tw - shadow - color);
  box - shadow: var(--tw - ring - offset - shadow, 0 0 #0000), var(--tw - ring - shadow, 0 0 #0000), var(--tw - shadow);
}
.outline - none{
  outline: 2px solid transparent;
  outline - offset: 2px;
}
.ring - primary{
  --tw - ring - opacity: 1;
  --tw - ring - color: rgb(48 86 211 / var(--tw - ring - opacity));
}
.blur{
  --tw - blur: blur(8px);
  filter: var(--tw - blur) var(--tw - brightness) var(--tw - contrast) var(--tw - grayscale) var(--tw - hue - rotate) var(--tw - invert) var(--tw - saturate) var(--tw - sepia) var(--tw - drop - shadow);
}
.filter{
  filter: var(--tw - blur) var(--tw - brightness) var(--tw - contrast) var(--tw - grayscale) var(--tw - hue - rotate) var(--tw - invert) var(--tw - saturate) var(--tw - sepia) var(--tw - drop - shadow);
}
.transition{
  transition - property: color, background - color, border - color, text - decoration - color, fill, stroke, opacity, box - shadow, transform, filter, -webkit - backdrop - filter;
  transition - property: color, background - color, border - color, text - decoration - color, fill, stroke, opacity, box - shadow, transform, filter, backdrop - filter;
  transition - property: color, background - color, border - color, text - decoration - color, fill, stroke, opacity, box - shadow, transform, filter, backdrop - filter, -webkit - backdrop - filter;
  transition - timing - function: cubic- bezier(0.4, 0, 0.2, 1);
  transition - duration: 150ms;
}
.transition - all{
  transition - property: all;
  transition - timing - function: cubic- bezier(0.4, 0, 0.2, 1);
  transition - duration: 150ms;
}

body {
  font - family: "Inter", sans - serif;
}
.snap {
  scroll - snap - type: x mandatory;
  scroll - behavior: smooth;
}

.snap:: -webkit - scrollbar {
  display: none;
}

.snap > img {
  scroll - snap - align: center;
}

.navbarTogglerActive > span: nth - child(1){
  top: 7px;
  --tw - rotate: 45deg;
  transform: translate(var(--tw - translate - x), var(--tw - translate - y)) rotate(var(--tw - rotate)) skewX(var(--tw - skew - x)) skewY(var(--tw - skew - y)) scaleX(var(--tw - scale - x)) scaleY(var(--tw - scale - y));
}

.navbarTogglerActive > span: nth - child(2){
  opacity: 0;
}

.navbarTogglerActive > span: nth - child(3){
  top: -0.5rem;
  --tw - rotate: 135deg;
  transform: translate(var(--tw - translate - x), var(--tw - translate - y)) rotate(var(--tw - rotate)) skewX(var(--tw - skew - x)) skewY(var(--tw - skew - y)) scaleX(var(--tw - scale - x)) scaleY(var(--tw - scale - y));
}

input:checked ~ .dot{
  --tw - translate - x: 100 %;
  transform: translate(var(--tw - translate - x), var(--tw - translate - y)) rotate(var(--tw - rotate)) skewX(var(--tw - skew - x)) skewY(var(--tw - skew - y)) scaleX(var(--tw - scale - x)) scaleY(var(--tw - scale - y));
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

input:checked ~ .dot.active{
  display: block;
}

input:checked ~ .dot.inactive{
  display: none;
}

input#toggleFour:checked ~ .box{
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

input#toggleFour:checked ~ .dot{
  --tw - translate - x: 100 %;
  transform: translate(var(--tw - translate - x), var(--tw - translate - y)) rotate(var(--tw - rotate)) skewX(var(--tw - skew - x)) skewY(var(--tw - skew - y)) scaleX(var(--tw - scale - x)) scaleY(var(--tw - scale - y));
  --tw - bg - opacity: 1;
  background - color: rgb(255 255 255 / var(--tw - bg - opacity));
}

input#toggleFive:checked ~ .dot{
  --tw - translate - x: 100 %;
  transform: translate(var(--tw - translate - x), var(--tw - translate - y)) rotate(var(--tw - rotate)) skewX(var(--tw - skew - x)) skewY(var(--tw - skew - y)) scaleX(var(--tw - scale - x)) scaleY(var(--tw - scale - y));
  --tw - bg - opacity: 1;
  background - color: rgb(255 255 255 / var(--tw - bg - opacity));
}

input#toggleFive:checked ~ .dot > span{
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

input#toggleSix:checked ~ .dot{
  --tw - translate - x: 100 %;
  transform: translate(var(--tw - translate - x), var(--tw - translate - y)) rotate(var(--tw - rotate)) skewX(var(--tw - skew - x)) skewY(var(--tw - skew - y)) scaleX(var(--tw - scale - x)) scaleY(var(--tw - scale - y));
  --tw - bg - opacity: 1;
  background - color: rgb(255 255 255 / var(--tw - bg - opacity));
}

input#toggleEight:checked ~ .box{
  --tw - bg - opacity: 1;
  background - color: rgb(234 238 251 / var(--tw - bg - opacity));
}

input#toggleEight:checked ~ .dot{
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

input#toggleEight:checked ~ .dot span{
  --tw - border - opacity: 1;
  border - color: rgb(255 255 255 / var(--tw - border - opacity));
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

input#toggleNine:checked ~ .dot span{
  --tw - bg - opacity: 1;
  background - color: rgb(255 255 255 / var(--tw - bg - opacity));
}

input#toggleNine:checked ~ .dot{
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

input:checked ~ .box{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
}

input#checkboxLabelOne:checked ~ .box{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
}

input#checkboxLabelOne:checked ~ .box.dot{
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

input#checkboxLabelTwo:checked ~ .box span{
  opacity: 1;
}

input#checkboxLabelThree:checked ~ .box span{
  opacity: 1;
}

input#checkboxLabelFour:checked ~ .box{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
}

input#checkboxLabelFour:checked ~ .box span{
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

input#checkboxLabelFive:checked ~ .box{
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

.shape - gradient {
  background: linear - gradient(
    180deg,
    rgba(255, 255, 255, 0.08) 0 %,
    rgba(196, 196, 196, 0) 100 %
  );
}

/* v-2.0 start from here */
.container{
  margin - left: auto;
  margin - right: auto;
  padding - left: 1rem;
  padding - right: 1rem;
}
input[type = "checkbox"]:checked ~ .box span{
  opacity: 1;
}

input[type = "radio"]:checked ~ .box.circle{
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

input[type = "radio"]:checked ~ .box span{
  opacity: 1;
}

.payment:checked ~label{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
  --tw - bg - opacity: 8 %;
}

.shipping:checked ~label{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
}

.shipping:checked ~label.title{
  --tw - text - opacity: 1;
  color: rgb(48 86 211 / var(--tw - text - opacity));
}

.color:checked ~label span{
  height: 0.5rem;
  width: 0.5rem;
}

.productColor:checked ~label span{
  height: 1.75rem;
  width: 1.75rem;
}

.productColor2:checked ~label span{
  height: 0.75rem;
  width: 0.75rem;
}

.filter - size:checked ~label{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
  --tw - text - opacity: 1;
  color: rgb(255 255 255 / var(--tw - text - opacity));
}

.filter - size - 2:checked ~label{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
  --tw - bg - opacity: 0.1;
}

.ram - size:checked ~label{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
  --tw - text - opacity: 1;
  color: rgb(48 86 211 / var(--tw - text - opacity));
}

.download - radio:checked ~label{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}
.download - radio:checked ~label span{
  --tw - text - opacity: 1;
  color: rgb(255 255 255 / var(--tw - text - opacity));
}
.download - radio:checked ~label.icon{
  opacity: 1;
}

/* ============
=============== */

.priceSlideOne.noUi - target{
  margin - top: 2rem;
  border - style: none;
  --tw - bg - opacity: 1;
  background - color: rgb(244 247 255 / var(--tw - bg - opacity));
  --tw - shadow: 0 0 #0000;
  --tw - shadow - colored: 0 0 #0000;
  box - shadow: var(--tw - ring - offset - shadow, 0 0 #0000), var(--tw - ring - shadow, 0 0 #0000), var(--tw - shadow);
}

.priceSlideOne.noUi - connects{
  height: 6px;
  border - radius: 9999px;
  --tw - bg - opacity: 1;
  background - color: rgb(212 217 232 / var(--tw - bg - opacity));
}

.priceSlideOne.noUi - connect{
  height: 6px;
  border - radius: 9999px;
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

.priceSlideOne.noUi - horizontal.noUi - handle{
  top: -0.5rem;
  height: 22px;
  width: 22px;
  border - radius: 9999px;
  border - width: 6px;
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
  --tw - bg - opacity: 1;
  background - color: rgb(255 255 255 / var(--tw - bg - opacity));
}

.priceSlideTwo.noUi - target{
  margin - top: 2rem;
  border - style: none;
  --tw - bg - opacity: 1;
  background - color: rgb(255 255 255 / var(--tw - bg - opacity));
  --tw - shadow: 0 0 #0000;
  --tw - shadow - colored: 0 0 #0000;
  box - shadow: var(--tw - ring - offset - shadow, 0 0 #0000), var(--tw - ring - shadow, 0 0 #0000), var(--tw - shadow);
}

.priceSlideTwo.noUi - connects{
  height: 0.25rem;
  border - radius: 9999px;
  --tw - bg - opacity: 1;
  background - color: rgb(212 217 232 / var(--tw - bg - opacity));
}

.priceSlideTwo.noUi - connect{
  height: 0.25rem;
  border - radius: 9999px;
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

.priceSlideTwo.noUi - horizontal.noUi - handle{
  top: -0.75rem;
  height: 30px;
  width: 30px;
  border - radius: 9999px;
  border - width: 1px;
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
  --tw - bg - opacity: 1;
  background - color: rgb(255 255 255 / var(--tw - bg - opacity));
}

.noUi - horizontal.noUi - handle: after,
.noUi - horizontal.noUi - handle:before{
  display: none;
}

#activityChart.apexcharts - legend - series{
  margin - right: 1.25rem!important;
}

/* ======= Switch ======= */
.autoSaverSwitch input:checked ~ .slider{
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}
.autoSaverSwitch input:checked ~ .slider.dot{
  --tw - translate - x: 1.5rem;
  transform: translate(var(--tw - translate - x), var(--tw - translate - y)) rotate(var(--tw - rotate)) skewX(var(--tw - skew - x)) skewY(var(--tw - skew - y)) scaleX(var(--tw - scale - x)) scaleY(var(--tw - scale - y));
}
.autoSaverSwitch input:checked ~ .label.on{
  display: block;
}
.autoSaverSwitch input:checked ~ .label.off{
  display: none;
}

.themeSwitcherTwo input:checked ~ .light{
  background - color: transparent;
  --tw - text - opacity: 1;
  color: rgb(99 115 129 / var(--tw - text - opacity));
}
.themeSwitcherTwo input:checked ~ .dark{
  --tw - bg - opacity: 1;
  background - color: rgb(244 247 255 / var(--tw - bg - opacity));
  --tw - text - opacity: 1;
  color: rgb(48 86 211 / var(--tw - text - opacity));
}

.themeSwitcherTwo input:checked ~ .slider{
  --tw - bg - opacity: 1;
  background - color: rgb(33 43 54 / var(--tw - bg - opacity));
}
.themeSwitcherTwo input:checked ~ .slider.dot{
  --tw - translate - x: 28px;
  transform: translate(var(--tw - translate - x), var(--tw - translate - y)) rotate(var(--tw - rotate)) skewX(var(--tw - skew - x)) skewY(var(--tw - skew - y)) scaleX(var(--tw - scale - x)) scaleY(var(--tw - scale - y));
}

.themeSwitcherThree input:checked ~div.light{
  --tw - bg - opacity: 1;
  background - color: rgb(255 255 255 / var(--tw - bg - opacity));
  --tw - text - opacity: 1;
  color: rgb(99 115 129 / var(--tw - text - opacity));
}
.themeSwitcherThree input:checked ~div.dark{
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
  --tw - text - opacity: 1;
  color: rgb(255 255 255 / var(--tw - text - opacity));
}

/* box-select-1 */

.checkbox - list:checked ~label{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

.checkbox - list:checked ~label.icon{
  opacity: 1;
}

.box - select - 1:checked ~label.box{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}
.box - select - 1:checked ~label.box.icon{
  opacity: 1;
}
.box - select - 1:checked ~label div.user - box{
  --tw - bg - opacity: 1;
  background - color: rgb(248 250 252 / var(--tw - bg - opacity));
}

.select - list:checked ~label{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
  --tw - text - opacity: 1;
  color: rgb(48 86 211 / var(--tw - text - opacity));
}
.select - list:checked ~label.icon{
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

.tableCheckbox:checked ~label.icon - box{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}

.tableCheckbox:checked ~label.icon{
  opacity: 1;
}

.tableCheckbox - 2:checked ~label{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}
.tableCheckbox - 2:checked ~label.icon{
  --tw - text - opacity: 1;
  color: rgb(255 255 255 / var(--tw - text - opacity));
  opacity: 1;
}

/* Maps */
.jvm - zoom - btn{
  top: auto;
  bottom: 0px;
  left: auto;
  display: flex;
  height: 2rem;
  width: 2rem;
  align - items: center;
  justify - content: center;
  border - radius: 0.25rem;
  border - width: .5px;
  --tw - border - opacity: 1;
  border - color: rgb(231 231 231 / var(--tw - border - opacity));
  --tw - bg - opacity: 1;
  background - color: rgb(244 247 255 / var(--tw - bg - opacity));
  font - weight: 600;
  line - height: 1;
  --tw - text - opacity: 1;
  color: rgb(99 115 129 / var(--tw - text - opacity));
}
.jvm - zoom - btn:hover{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
  --tw - text - opacity: 1;
  color: rgb(255 255 255 / var(--tw - text - opacity));
}

.mapOne.jvm - zoom - btn{
  top: auto;
  bottom: 0px;
  left: auto;
}
.mapOne.jvm - zoom - btn.jvm - zoomin{
  right: 2.25rem;
}
.mapOne.jvm - zoom - btn.jvm - zoomout{
  right: 0px;
}

.mapTwo.jvm - zoom - btn{
  top: auto;
  bottom: 0px;
}

.mapTwo.jvm - zoom - btn.jvm - zoomin{
  left: 0px;
}
.mapTwo.jvm - zoom - btn.jvm - zoomout{
  left: 2.25rem;
}

.mapFour.jvm - zoom - btn{
  top: -5rem;
}
.mapFour.jvm - zoom - btn.jvm - zoomin{
  right: 2.25rem;
}
.mapFour.jvm - zoom - btn.jvm - zoomout{
  right: 0px;
}
.hover\: border - primary:hover{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
}
.hover\: bg - primary:hover{
  --tw - bg - opacity: 1;
  background - color: rgb(48 86 211 / var(--tw - bg - opacity));
}
.hover\: bg - black:hover{
  --tw - bg - opacity: 1;
  background - color: rgb(33 43 54 / var(--tw - bg - opacity));
}
.hover\: bg -\[\#EDEFF1\]:hover{
  --tw - bg - opacity: 1;
  background - color: rgb(237 239 241 / var(--tw - bg - opacity));
}
.hover\: bg - opacity - 90:hover{
  --tw - bg - opacity: 0.9;
}
.hover\: text - primary:hover{
  --tw - text - opacity: 1;
  color: rgb(48 86 211 / var(--tw - text - opacity));
}
.hover\: text - white:hover{
  --tw - text - opacity: 1;
  color: rgb(255 255 255 / var(--tw - text - opacity));
}
.hover\: text - red - 600:hover{
  --tw - text - opacity: 1;
  color: rgb(220 38 38 / var(--tw - text - opacity));
}
.focus\: border - primary:focus{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
}
.focus\: ring - 2:focus{
  --tw - ring - offset - shadow: var(--tw - ring - inset) 0 0 0 var(--tw - ring - offset - width) var(--tw - ring - offset - color);
  --tw - ring - shadow: var(--tw - ring - inset) 0 0 0 calc(2px + var(--tw - ring - offset - width)) var(--tw - ring - color);
  box - shadow: var(--tw - ring - offset - shadow), var(--tw - ring - shadow), var(--tw - shadow, 0 0 #0000);
}
.focus - visible\: shadow - none: focus - visible{
  --tw - shadow: 0 0 #0000;
  --tw - shadow - colored: 0 0 #0000;
  box - shadow: var(--tw - ring - offset - shadow, 0 0 #0000), var(--tw - ring - shadow, 0 0 #0000), var(--tw - shadow);
}
.active\: border - primary:active{
  --tw - border - opacity: 1;
  border - color: rgb(48 86 211 / var(--tw - border - opacity));
}
.disabled\: cursor -default:disabled{
  cursor: default ;
}
.disabled\: bg -\[\#F5F7FD\]:disabled{
  --tw - bg - opacity: 1;
  background - color: rgb(245 247 253 / var(--tw - bg - opacity));
}
.group: hover.group - hover\: text - primary{
  --tw - text - opacity: 1;
  color: rgb(48 86 211 / var(--tw - text - opacity));
}
.group: hover.group - hover\: opacity - 100{
  opacity: 1;
}
@media(min - width: 400px) {

  .xs\: mb - 0{
    margin - bottom: 0px;
  }

  .xs\: mr - 4{
    margin - right: 1rem;
  }

  .xs\:flex{
    display: flex;
  }

  .xs\: min - w -\[368px\]{
    min - width: 368px;
  }

  .xs\: max - w -\[400px\]{
    max - width: 400px;
  }

  .xs\: px - 8{
    padding - left: 2rem;
    padding - right: 2rem;
  }

  .xs\: text - right{
    text - align: right;
  }

  .xs\: text - xl{
    font - size: 1.25rem;
    line - height: 1.75rem;
  }

  .xs\: text -\[28px\]{
    font - size: 28px;
  }
}
@media(min - width: 540px) {

  .sm\: mb - 0{
    margin - bottom: 0px;
  }

  .sm\:block{
    display: block;
  }

  .sm\:flex{
    display: flex;
  }

  .sm\: w - 1\/2{
  width: 50 %;
}

  .sm\: min - w -\[510px\]{
  min - width: 510px;
}

  .sm\: max - w -\[220px\]{
  max - width: 220px;
}

  .sm\: max - w -\[540px\]{
  max - width: 540px;
}

  .sm\: justify - end{
  justify - content: flex - end;
}

  .sm\: justify - between{
  justify - content: space - between;
}

  .sm\: space - x - 5 > : not([hidden]) ~ : not([hidden]){
  --tw - space - x - reverse: 0;
  margin - right: calc(1.25rem * var(--tw - space - x - reverse));
  margin - left: calc(1.25rem * calc(1 - var(--tw - space - x - reverse)));
}

  .sm\: p - 9{
  padding: 2.25rem;
}

  .sm\: px - 6{
  padding - left: 1.5rem;
  padding - right: 1.5rem;
}

  .sm\: px - 7{
  padding - left: 1.75rem;
  padding - right: 1.75rem;
}

  .sm\: px - 14{
  padding - left: 3.5rem;
  padding - right: 3.5rem;
}

  .sm\: py - 10{
  padding - top: 2.5rem;
  padding - bottom: 2.5rem;
}

  .sm\: py -\[60px\]{
  padding - top: 60px;
  padding - bottom: 60px;
}

  .sm\: px -\[65px\]{
  padding - left: 65px;
  padding - right: 65px;
}

  .sm\: text -\[45px\]{
  font - size: 45px;
}

  .sm\: text - lg{
  font - size: 1.125rem;
  line - height: 1.75rem;
}

  .sm\: text - 4xl{
  font - size: 2.25rem;
  line - height: 2.5rem;
}

  .sm\: text - 2xl{
  font - size: 1.5rem;
  line - height: 2rem;
}

  .sm\: text - 3xl{
  font - size: 1.875rem;
  line - height: 2.25rem;
}

  .sm\: text - xl{
  font - size: 1.25rem;
  line - height: 1.75rem;
}
}
@media(min - width: 720px) {

  .md\: ml - auto{
    margin - left: auto;
  }

  .md\: mb - 0{
    margin - bottom: 0px;
  }

  .md\: mt -\[60px\]{
    margin - top: 60px;
  }

  .md\:block{
    display: block;
  }

  .md\:flex{
    display: flex;
  }

  .md\: h -\[480px\]{
    height: 480px;
  }

  .md\: w - 1\/2{
  width: 50 %;
}

  .md\: w - 1\/3{
width: 33.333333 %;
  }

  .md\: w - 2\/3{
width: 66.666667 %;
  }

  .md\: min - w -\[340px\]{
  min - width: 340px;
}

  .md\: max - w -\[315px\]{
  max - width: 315px;
}

  .md\: max - w -\[720px\]{
  max - width: 720px;
}

  .md\: justify - end{
  justify - content: flex - end;
}

  .md\: border - x{
  border - left - width: 1px;
  border - right - width: 1px;
}

  .md\: border -\[\#e7e7e7\]{
  --tw - border - opacity: 1;
  border - color: rgb(231 231 231 / var(--tw - border - opacity));
}

  .md\: p - 10{
  padding: 2.5rem;
}

  .md\: px - 8{
  padding - left: 2rem;
  padding - right: 2rem;
}

  .md\: py - 5{
  padding - top: 1.25rem;
  padding - bottom: 1.25rem;
}

  .md\: px - 12{
  padding - left: 3rem;
  padding - right: 3rem;
}

  .md\: pt - 0{
  padding - top: 0px;
}

  .md\: text - right{
  text - align: right;
}

  .md\: text -\[40px\]{
  font - size: 40px;
}

  .md\: text - 2xl{
  font - size: 1.5rem;
  line - height: 2rem;
}

  .md\: text - 4xl{
  font - size: 2.25rem;
  line - height: 2.5rem;
}

  .md\: text - lg{
  font - size: 1.125rem;
  line - height: 1.75rem;
}

  .md\: text - sm{
  font - size: 0.875rem;
  line - height: 1.25rem;
}

  .md\: leading - tight{
  line - height: 1.25;
}

  .md\: leading - relaxed{
  line - height: 1.625;
}
}
@media(min - width: 960px) {

  .lg\:invisible{
    visibility: hidden;
  }

  .lg\:static{
    position: static;
  }

  .lg\:absolute{
    position: absolute;
  }

  .lg\: top -\[115\%\]{
    top: 115 %;
  }

  .lg\: order - first{
    order: -9999;
  }

  .lg\: mx - 5{
    margin - left: 1.25rem;
    margin - right: 1.25rem;
  }

  .lg\: mx - 6{
    margin - left: 1.5rem;
    margin - right: 1.5rem;
  }

  .lg\: mb - 0{
    margin - bottom: 0px;
  }

  .lg\: mb - 20{
    margin - bottom: 5rem;
  }

  .lg\: ml - auto{
    margin - left: auto;
  }

  .lg\: mr - 5{
    margin - right: 1.25rem;
  }

  .lg\:block{
    display: block;
  }

  .lg\:flex{
    display: flex;
  }

  .lg\: inline - flex{
    display: inline - flex;
  }

  .lg\:hidden{
    display: none;
  }

  .lg\: w - 7\/12{
  width: 58.333333 %;
}

  .lg\: w - 5\/12{
width: 41.666667 %;
  }

  .lg\: w - 4\/12{
width: 33.333333 %;
  }

  .lg\: w - 8\/12{
width: 66.666667 %;
  }

  .lg\: w - full{
  width: 100 %;
}

  .lg\: w - 1\/2{
width: 50 %;
  }

  .lg\: w - 1\/4{
width: 25 %;
  }

  .lg\: w - 1\/3{
width: 33.333333 %;
  }

  .lg\: w - 3\/12{
width: 25 %;
  }

  .lg\: w - 6\/12{
width: 50 %;
  }

  .lg\: w - 48{
  width: 12rem;
}

  .lg\: w -\[600px\]{
  width: 600px;
}

  .lg\: min - w -\[312px\]{
  min - width: 312px;
}

  .lg\: max - w -\[250px\]{
  max - width: 250px;
}

  .lg\: max - w -\[960px\]{
  max - width: 960px;
}

  .lg\: max - w - full{
  max - width: 100 %;
}

  .lg\: justify - end{
  justify - content: flex - end;
}

  .lg\: justify - center{
  justify - content: center;
}

  .lg\: justify - between{
  justify - content: space - between;
}

  .lg\: space - x - 3 > : not([hidden]) ~ : not([hidden]){
  --tw - space - x - reverse: 0;
  margin - right: calc(0.75rem * var(--tw - space - x - reverse));
  margin - left: calc(0.75rem * calc(1 - var(--tw - space - x - reverse)));
}

  .lg\: border -\[\.5px\]{
  border - width: .5px;
}

  .lg\: border -\[\#e7e7e7\]{
  --tw - border - opacity: 1;
  border - color: rgb(231 231 231 / var(--tw - border - opacity));
}

  .lg\: bg - transparent{
  background - color: transparent;
}

  .lg\: px - 6{
  padding - left: 1.5rem;
  padding - right: 1.5rem;
}

  .lg\: px - 8{
  padding - left: 2rem;
  padding - right: 2rem;
}

  .lg\: py -\[60px\]{
  padding - top: 60px;
  padding - bottom: 60px;
}

  .lg\: px -\[65px\]{
  padding - left: 65px;
  padding - right: 65px;
}

  .lg\: py - 3{
  padding - top: 0.75rem;
  padding - bottom: 0.75rem;
}

  .lg\: py - 0{
  padding - top: 0px;
  padding - bottom: 0px;
}

  .lg\: px - 0{
  padding - left: 0px;
  padding - right: 0px;
}

  .lg\: py - 6{
  padding - top: 1.5rem;
  padding - bottom: 1.5rem;
}

  .lg\: py - 4{
  padding - top: 1rem;
  padding - bottom: 1rem;
}

  .lg\: py - 2{
  padding - top: 0.5rem;
  padding - bottom: 0.5rem;
}

  .lg\: py - 8{
  padding - top: 2rem;
  padding - bottom: 2rem;
}

  .lg\: px - 12{
  padding - left: 3rem;
  padding - right: 3rem;
}

  .lg\: pt -\[120px\]{
  padding - top: 120px;
}

  .lg\: pb -\[90px\]{
  padding - bottom: 90px;
}

  .lg\: pb - 20{
  padding - bottom: 5rem;
}

  .lg\: pr - 0{
  padding - right: 0px;
}

  .lg\: text - base{
  font - size: 1rem;
  line - height: 1.5rem;
}

  .lg\: text - xl{
  font - size: 1.25rem;
  line - height: 1.75rem;
}

  .lg\: text -\[32px\]{
  font - size: 32px;
}

  .lg\: text - 3xl{
  font - size: 1.875rem;
  line - height: 2.25rem;
}

  .lg\: text - 2xl{
  font - size: 1.5rem;
  line - height: 2rem;
}

  .lg\: opacity - 0{
  opacity: 0;
}

  .lg\: shadow - none{
  --tw - shadow: 0 0 #0000;
  --tw - shadow - colored: 0 0 #0000;
  box - shadow: var(--tw - ring - offset - shadow, 0 0 #0000), var(--tw - ring - shadow, 0 0 #0000), var(--tw - shadow);
}

  .group: hover.lg\: group - hover\:visible{
  visibility: visible;
}

  .group: hover.lg\: group - hover\: top - full{
  top: 100 %;
}
}
@media(min - width: 1140px) {

  .xl\: left - 10{
    left: 2.5rem;
  }

  .xl\: mr - 10{
    margin - right: 2.5rem;
  }

  .xl\:block{
    display: block;
  }

  .xl\:flex{
    display: flex;
  }

  .xl\: inline - flex{
    display: inline - flex;
  }

  .xl\: w - 8\/12{
  width: 66.666667 %;
}

  .xl\: w - 4\/12{
width: 33.333333 %;
  }

  .xl\: w - 3\/12{
width: 25 %;
  }

  .xl\: w - 9\/12{
width: 75 %;
  }

  .xl\: w - 1\/3{
width: 33.333333 %;
  }

  .xl\: w - 7\/12{
width: 58.333333 %;
  }

  .xl\: w - 5\/12{
width: 41.666667 %;
  }

  .xl\: w - 11\/12{
width: 91.666667 %;
  }

  .xl\: w - 2\/12{
width: 16.666667 %;
  }

  .xl\: w -\[700px\]{
  width: 700px;
}

  .xl\: min - w -\[282px\]{
  min - width: 282px;
}

  .xl\: max - w -\[315px\]{
  max - width: 315px;
}

  .xl\: max - w -\[1140px\]{
  max - width: 1140px;
}

  .xl\: px - 10{
  padding - left: 2.5rem;
  padding - right: 2.5rem;
}

  .xl\: px - 8{
  padding - left: 2rem;
  padding - right: 2rem;
}

  .xl\: px - 14{
  padding - left: 3.5rem;
  padding - right: 3.5rem;
}

  .xl\: pl - 9{
  padding - left: 2.25rem;
}

  .xl\: pr - 9{
  padding - right: 2.25rem;
}

  .xl\: pl - 11{
  padding - left: 2.75rem;
}

  .xl\: text - lg{
  font - size: 1.125rem;
  line - height: 1.75rem;
}

  .xl\: text - 2xl{
  font - size: 1.5rem;
  line - height: 2rem;
}

  .xl\: text - 4xl{
  font - size: 2.25rem;
  line - height: 2.5rem;
}

  .xl\: text - 3xl{
  font - size: 1.875rem;
  line - height: 2.25rem;
}

  .xl\: text -\[45px\]{
  font - size: 45px;
}

  .xl\: leading - tight{
  line - height: 1.25;
}
}
@media(min - width: 1320px) {

  .\32xl\: mx - 6{
    margin - left: 1.5rem;
    margin - right: 1.5rem;
  }

  .\32xl\: w - 5\/12{
  width: 41.666667 %;
}

  .\32xl\: w - 10\/12{
width: 83.333333 %;
  }

  .\32xl\: min - w -\[325px\]{
  min - width: 325px;
}

  .\32xl\: max - w -\[1320px\]{
  max - width: 1320px;
}

  .\32xl\: space - x - 5 > : not([hidden]) ~ : not([hidden]){
  --tw - space - x - reverse: 0;
  margin - right: calc(1.25rem * var(--tw - space - x - reverse));
  margin - left: calc(1.25rem * calc(1 - var(--tw - space - x - reverse)));
}

  .\32xl\: px - 7{
  padding - left: 1.75rem;
  padding - right: 1.75rem;
}
}

