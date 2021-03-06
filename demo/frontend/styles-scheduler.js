/*
   Copyright 2019, Stefan Uebe

   Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
   documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
   rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
   permit persons to whom the Software is furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in all copies or substantial portions
   of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
   WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
   COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
   OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/*
This file contains a list of generated custom properties that might be used to style the FullCalendar.
Simply remove the comment, change the value and refresh the page.

Please be aware that this list may custom properties that are nonsense to change. That is due to the generic
nature of the list.

The names of the properties are created by the css class selectors (including pseudo-selectors) and the
css properties for which they set a value.

Examples:

.fc button .fc-icon {
    top: ...;
}

is targeted by --fc_button_fc-icon-top.


.fc .fc-row .fc-content-skeleton td {
    background: ...;
}

is targeted by custom property --fc_fc-row_fc-content-skeleton_td-background


.fc .fc-toolbar > * > :first-child {
    margin-left: ...;
}

is targeted by --fc_fc-toolbar__LACE_BRACE___ASTERISK___LACE_BRACE___COLON_first-child-margin-left


All the css properties have also a default value, so you simply can clean the list and keep the custom properties
that you need.

*/

const $_documentContainer = document.createElement('template');


$_documentContainer.innerHTML = `
<custom-style>
    <style>
        html{
            
            /**
            * timeline
            */
            
            /*--fc-ltr_fc-time-area_fc-bgevent-container-left: 0;*/
            /*--fc-ltr_fc-time-area_fc-chrono_th-text-align: left;*/
            /*--fc-ltr_fc-time-area_fc-highlight-container-left: 0;*/
            /*--fc-ltr_fc-time-area_fc-mirror-container-left: 0;*/
            /*--fc-ltr_fc-time-area_fc-slats_td-border-right-width: 0;*/
            /*--fc-ltr_fc-timeline-event-flex-direction: row;*/
            /*--fc-ltr_fc-timeline-event-margin-right: 1px;*/
            /*--fc-ltr_fc-timeline-eventfc-not-end_COLON_after-border-right: 0;*/
            /*--fc-ltr_fc-timeline-eventfc-not-start_COLON_before-border-left: 0;*/
            /*--fc-no-overlap_fc-time-area_fc-event-container-padding-bottom: 0;*/
            /*--fc-no-overlap_fc-time-area_fc-event-container-top: 0;*/
            /*--fc-no-overlap_fc-timeline-event-margin-bottom: 0;*/
            /*--fc-no-overlap_fc-timeline-event-padding-bottom: 5px;*/
            /*--fc-no-overlap_fc-timeline-event-padding-top: 5px;*/
            /*--fc-no-scrollbars-background: rgba(255, 255, 255, 0);*/
            /*--fc-no-scrollbars_COLON__COLON_-webkit-scrollbar-height: 0;*/
            /*--fc-no-scrollbars_COLON__COLON_-webkit-scrollbar-width: 0;*/
            /*--fc-rtl_fc-time-area_fc-bgevent-container-right: 0;*/
            /*--fc-rtl_fc-time-area_fc-chrono_th-text-align: right;*/
            /*--fc-rtl_fc-time-area_fc-highlight-container-right: 0;*/
            /*--fc-rtl_fc-time-area_fc-mirror-container-right: 0;*/
            /*--fc-rtl_fc-time-area_fc-slats_td-border-left-width: 0;*/
            /*--fc-rtl_fc-timeline-direction: rtl;*/
            /*--fc-rtl_fc-timeline-event-margin-left: 1px;*/
            /*--fc-rtl_fc-timeline-eventfc-not-end_COLON_after-border-left: 0;*/
            /*--fc-rtl_fc-timeline-eventfc-not-start_COLON_before-border-right: 0;*/
            /*--fc-scrolled_fc-head_fc-scroller-z-index: 2;*/
            /*--fc-scroller-canvas-box-sizing: border-box;*/
            /*--fc-scroller-canvas-min-height: 100%;*/
            /*--fc-scroller-canvas-position: relative;*/
            /*--fc-scroller-canvas__LACE_BRACE__fc-bg-z-index: 1;*/
            /*--fc-scroller-canvas__LACE_BRACE__fc-content-border-style: solid;*/
            /*--fc-scroller-canvas__LACE_BRACE__fc-content-border-width: 0;*/
            /*--fc-scroller-canvas__LACE_BRACE__fc-content-position: relative;*/
            /*--fc-scroller-canvas__LACE_BRACE__fc-content-z-index: 2;*/
            /*--fc-scroller-canvasfc-gutter-left__LACE_BRACE__fc-content-border-left-width: 1px;*/
            /*--fc-scroller-canvasfc-gutter-left__LACE_BRACE__fc-content-margin-left: -1px;*/
            /*--fc-scroller-canvasfc-gutter-right__LACE_BRACE__fc-content-border-right-width: 1px;*/
            /*--fc-scroller-canvasfc-gutter-right__LACE_BRACE__fc-content-margin-right: -1px;*/
            /*--fc-scroller-canvasfc-gutter-top__LACE_BRACE__fc-content-border-top-width: 1px;*/
            /*--fc-scroller-canvasfc-gutter-top__LACE_BRACE__fc-content-margin-top: -1px;*/
            /*--fc-scroller-clip-overflow: hidden;*/
            /*--fc-scroller-clip-position: relative;*/
            /*--fc-time-area_col-min-width: 2.2em;*/
            /*--fc-time-area_fc-bgevent-bottom: 0;*/
            /*--fc-time-area_fc-bgevent-container-bottom: 0;*/
            /*--fc-time-area_fc-bgevent-container-position: absolute;*/
            /*--fc-time-area_fc-bgevent-container-top: 0;*/
            /*--fc-time-area_fc-bgevent-container-width: 0;*/
            /*--fc-time-area_fc-bgevent-container-z-index: 2;*/
            /*--fc-time-area_fc-bgevent-position: absolute;*/
            /*--fc-time-area_fc-bgevent-top: 0;*/
            /*--fc-time-area_fc-event-container-padding-bottom: 8px;*/
            /*--fc-time-area_fc-event-container-position: relative;*/
            /*--fc-time-area_fc-event-container-top: -1px;*/
            /*--fc-time-area_fc-event-container-width: 0;*/
            /*--fc-time-area_fc-event-container-z-index: 2;*/
            /*--fc-time-area_fc-highlight-bottom: 0;*/
            /*--fc-time-area_fc-highlight-container-bottom: 0;*/
            /*--fc-time-area_fc-highlight-container-position: absolute;*/
            /*--fc-time-area_fc-highlight-container-top: 0;*/
            /*--fc-time-area_fc-highlight-container-width: 0;*/
            /*--fc-time-area_fc-highlight-container-z-index: 2;*/
            /*--fc-time-area_fc-highlight-position: absolute;*/
            /*--fc-time-area_fc-highlight-top: 0;*/
            /*--fc-time-area_fc-mirror-container-position: absolute;*/
            /*--fc-time-area_fc-mirror-container-top: 0;*/
            /*--fc-time-area_fc-mirror-container-z-index: 3;*/
            /*--fc-time-area_fc-now-indicator-arrow-border-left-color: transparent;*/
            /*--fc-time-area_fc-now-indicator-arrow-border-right-color: transparent;*/
            /*--fc-time-area_fc-now-indicator-arrow-border-width: 6px 5px 0 5px;*/
            /*--fc-time-area_fc-now-indicator-arrow-margin: 0 -6px;*/
            /*--fc-time-area_fc-now-indicator-line-border-left-width: 1px;*/
            /*--fc-time-area_fc-now-indicator-line-bottom: 0;*/
            /*--fc-time-area_fc-now-indicator-line-margin: 0 -1px;*/
            /*--fc-time-area_fc-slats-bottom: 0;*/
            /*--fc-time-area_fc-slats-left: 0;*/
            /*--fc-time-area_fc-slats-position: absolute;*/
            /*--fc-time-area_fc-slats-right: 0;*/
            /*--fc-time-area_fc-slats-top: 0;*/
            /*--fc-time-area_fc-slats-z-index: 1;*/
            /*--fc-time-area_fc-slats_fc-minor-border-style: dotted;*/
            /*--fc-time-area_fc-slats_table-height: 100%;*/
            /*--fc-time-area_fc-slats_td-border-width: 0 1px;*/
            /*--fc-time-area_tr_COLON_first-child_fc-event-container-top: 0;*/
            /*--fc-timeline-event-border-radius: 0;*/
            /*--fc-timeline-event-display: flex;*/
            /*--fc-timeline-event-margin-bottom: 1px;*/
            /*--fc-timeline-event-padding: 2px 1px;*/
            /*--fc-timeline-event-position: absolute;*/
            /*--fc-timeline-event_fc-time--moz-box-sizing: border-box;*/
            /*--fc-timeline-event_fc-time--webkit-box-sizing: border-box;*/
            /*--fc-timeline-event_fc-time-box-sizing: border-box;*/
            /*--fc-timeline-event_fc-time-display: inline-block;*/
            /*--fc-timeline-event_fc-time-font-weight: bold;*/
            /*--fc-timeline-event_fc-time-max-width: 100%;*/
            /*--fc-timeline-event_fc-time-overflow: hidden;*/
            /*--fc-timeline-event_fc-time-padding: 0 2px;*/
            /*--fc-timeline-event_fc-time-vertical-align: top;*/
            /*--fc-timeline-event_fc-time-white-space: nowrap;*/
            /*--fc-timeline-event_fc-time-wrap-flex-shrink: 0;*/
            /*--fc-timeline-event_fc-time-wrap-min-width: 0;*/
            /*--fc-timeline-event_fc-title--moz-box-sizing: border-box;*/
            /*--fc-timeline-event_fc-title--webkit-box-sizing: border-box;*/
            /*--fc-timeline-event_fc-title-box-sizing: border-box;*/
            /*--fc-timeline-event_fc-title-display: inline-block;*/
            /*--fc-timeline-event_fc-title-max-width: 100%;*/
            /*--fc-timeline-event_fc-title-overflow: hidden;*/
            /*--fc-timeline-event_fc-title-padding: 0 2px;*/
            /*--fc-timeline-event_fc-title-vertical-align: top;*/
            /*--fc-timeline-event_fc-title-white-space: nowrap;*/
            /*--fc-timeline-event_fc-title-wrap-flex-grow: 1;*/
            /*--fc-timeline-event_fc-title-wrap-min-width: 0;*/
            /*--fc-timeline-eventfc-not-end_COLON_after-align-self: center;*/
            /*--fc-timeline-eventfc-not-end_COLON_after-border: 5px solid rgb(0, 0, 0);*/
            /*--fc-timeline-eventfc-not-end_COLON_after-border-bottom-color: transparent;*/
            /*--fc-timeline-eventfc-not-end_COLON_after-border-top-color: transparent;*/
            /*--fc-timeline-eventfc-not-end_COLON_after-content: "";*/
            /*--fc-timeline-eventfc-not-end_COLON_after-height: 0;*/
            /*--fc-timeline-eventfc-not-end_COLON_after-margin: 0 1px;*/
            /*--fc-timeline-eventfc-not-end_COLON_after-opacity: 0.5;*/
            /*--fc-timeline-eventfc-not-end_COLON_after-width: 0;*/
            /*--fc-timeline-eventfc-not-start_COLON_before-align-self: center;*/
            /*--fc-timeline-eventfc-not-start_COLON_before-border: 5px solid rgb(0, 0, 0);*/
            /*--fc-timeline-eventfc-not-start_COLON_before-border-bottom-color: transparent;*/
            /*--fc-timeline-eventfc-not-start_COLON_before-border-top-color: transparent;*/
            /*--fc-timeline-eventfc-not-start_COLON_before-content: "";*/
            /*--fc-timeline-eventfc-not-start_COLON_before-height: 0;*/
            /*--fc-timeline-eventfc-not-start_COLON_before-margin: 0 1px;*/
            /*--fc-timeline-eventfc-not-start_COLON_before-opacity: 0.5;*/
            /*--fc-timeline-eventfc-not-start_COLON_before-width: 0;*/
            /*--fc-timeline_fc-body_fc-scroller-z-index: 1;*/
            /*--fc-timeline_fc-cell-content-overflow: hidden;*/
            /*--fc-timeline_fc-cell-text-display: inline-block;*/
            /*--fc-timeline_fc-cell-text-padding-left: 4px;*/
            /*--fc-timeline_fc-cell-text-padding-right: 4px;*/
            /*--fc-timeline_fc-head_fc-cell-content-padding-bottom: 3px;*/
            /*--fc-timeline_fc-head_fc-cell-content-padding-top: 3px;*/
            /*--fc-timeline_fc-head_fc-time-area_fc-cell-content-overflow: visible;*/
            /*--fc-timeline_fc-now-indicator-top: 0;*/
            /*--fc-timeline_fc-now-indicator-z-index: 3;*/
            /*--fc-timeline_fc-scroller-canvas__LACE_BRACE__div__LACE_BRACE__div__LACE_BRACE__table-border-style: hidden;*/
            /*--fc-timeline_fc-scroller-canvas__LACE_BRACE__div__LACE_BRACE__table-border-style: hidden;*/
            /*--fc-timeline_fc-scroller-canvas__LACE_BRACE__fc-content__LACE_BRACE__fc-rows__LACE_BRACE__table-border-bottom-style: none;*/
            /*--fc-timeline_td-white-space: nowrap;*/
            /*--fc-timeline_th-vertical-align: middle;*/
            /*--fc-timeline_th-white-space: nowrap;*/
            /*--fc-timelinefc-scrolled_fc-head_fc-scroller-box-shadow: 0 3px 4px rgba(0, 0, 0, 0.075);*/
            
            /**
            * resource-timeline
            */
            
            /*--fc-body_fc-resource-area_fc-cell-content-padding-bottom: 8px;*/
            /*--fc-body_fc-resource-area_fc-cell-content-padding-top: 8px;*/
            /*--fc-flat_fc-expander-space-display: none;*/
            /*--fc-ltr_fc-resource-area_th_fc-col-resizer-right: -3px;*/
            /*--fc-ltr_fc-resource-area_tr__LACE_BRACE___ASTERISK_-text-align: left;*/
            /*--fc-no-overlap_fc-body_fc-resource-area_fc-cell-content-padding-bottom: 6px;*/
            /*--fc-no-overlap_fc-body_fc-resource-area_fc-cell-content-padding-top: 6px;*/
            /*--fc-resource-area-width: 30%;*/
            /*--fc-resource-area_col-min-width: 70px;*/
            /*--fc-resource-area_col-width: 40%;*/
            /*--fc-resource-area_colfc-main-col-width: 60%;*/
            /*--fc-resource-area_fc-cell-content-padding-left: 4px;*/
            /*--fc-resource-area_fc-cell-content-padding-right: 4px;*/
            /*--fc-resource-area_fc-expander-cursor: pointer;*/
            /*--fc-resource-area_fc-expander-opacity: 0.65;*/
            /*--fc-resource-area_fc-icon-display: inline-block;*/
            /*--fc-resource-area_fc-icon-text-align: center;*/
            /*--fc-resource-area_fc-icon-width: 1em;*/
            /*--fc-resource-area_fc-super_th-text-align: center;*/
            /*--fc-resource-area_th__LACE_BRACE__div-position: relative;*/
            /*--fc-resource-area_th_fc-cell-content-position: relative;*/
            /*--fc-resource-area_th_fc-cell-content-z-index: 1;*/
            /*--fc-resource-area_th_fc-col-resizer-bottom: 0;*/
            /*--fc-resource-area_th_fc-col-resizer-position: absolute;*/
            /*--fc-resource-area_th_fc-col-resizer-top: 0;*/
            /*--fc-resource-area_th_fc-col-resizer-width: 5px;*/
            /*--fc-resource-area_th_fc-col-resizer-z-index: 2;*/
            /*--fc-rtl_fc-resource-area_th_fc-col-resizer-left: -3px;*/
            /*--fc-rtl_fc-resource-area_tr__LACE_BRACE___ASTERISK_-text-align: right;*/
            /*--fc-time-area_fc-rows-position: relative;*/
            /*--fc-time-area_fc-rows-z-index: 3;*/
            /*--fc-time-area_fc-rows_fc-bgevent-container-z-index: 1;*/
            /*--fc-time-area_fc-rows_fc-highlight-container-z-index: 1;*/
            /*--fc-time-area_fc-rows_td__LACE_BRACE__div-position: relative;*/
            /*--fc-timeline_fc-body__LACE_BRACE__tr__LACE_BRACE__fc-divider-border-top: 0;*/
            /*--fc-timeline_fc-col-resizer-cursor: col-resize;*/
            /*--fc-timeline_fc-divider-border-style: double;*/
            /*--fc-timeline_fc-divider-width: 3px;*/
            /*--fc-timeline_fc-head__LACE_BRACE__tr__LACE_BRACE__fc-divider-border-bottom: 0;*/

        }
    </style>
</custom-style>
`;
document.head.appendChild($_documentContainer.content);