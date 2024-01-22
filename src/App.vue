<script>
import {Splitter,SplitterComponent, PanesDirective, PaneDirective } from "@syncfusion/ej2-vue-layouts";
import {ListViewComponent} from "@syncfusion/ej2-vue-lists";
import { createApp } from "vue";
const app = createApp();
var nestedContent = app.component('nestedTemplate', {
    data: () => ({}),
    template: `<div id='vertical_splitter' class="vertical_splitter">
                    <div class="nested">Middle content</div>
                    <div class="nested">Nested content</div>
                </div>`,

});
var listviewContent = app.component('listviewTemplate', {
    template: ` <div>
        <ejs-listview  :dataSource='listData' :fields='fields' :showHeader='true'
        headerTitle="Folders" :showIcon="true">
        </ejs-listview>
    </div>`,

    data: function() {
    return {
        listData : [
    {
        id: '01', text: 'Music', icon: 'folder',
        child: [
            { id: '01-01', text: 'Gouttes.mp3', icon: 'file' }
        ]
    },
    {
        id: '02', text: 'Videos', icon: 'folder',
        child: [
            { id: '02-01', text: 'Naturals.mp4', icon: 'file' },
            { id: '02-02', text: 'Wild.mpeg', icon: 'file' },
        ]
    },
    {
        id: '03', text: 'Documents', icon: 'folder',
        child: [
            { id: '03-01', text: 'Environment Pollution.docx', icon: 'file' },
            { id: '03-02', text: 'Global Water, Sanitation, & Hygiene.docx', icon: 'file' },
            { id: '03-03', text: 'Global Warming.ppt', icon: 'file' },
            { id: '03-04', text: 'Social Network.pdf', icon: 'file' },
            { id: '03-05', text: 'Youth Empowerment.pdf', icon: 'file' },
        ]
    },
    {
        id: '04', text: 'Pictures', icon: 'folder',
        child: [
            {
                id: '04-01', text: 'Camera Roll', icon: 'folder',
                child: [
                    { id: '04-01-01', text: 'WIN_20160726_094117.JPG', icon: 'file' },
                    { id: '04-01-02', text: 'WIN_20160726_094118.JPG', icon: 'file' },
                    { id: '04-01-03', text: 'WIN_20160726_094119.JPG', icon: 'file' }
                ]
            },
            {
                id: '04-02', text: 'Wind.jpg', icon: 'file'
            },
            {
                id: '04-02', text: 'Stone.jpg', icon: 'file'
            },
            {
                id: '04-02', text: 'Home.jpg', icon: 'file'
            },
            {
                id: '04-02', text: 'Bridge.png', icon: 'file'
            }
        ]
    },
    {
        id: '05', text: 'Downloads', icon: 'folder',
        child: [
            { id: '05-01', text: 'UI-Guide.pdf', icon: 'file' },
            { id: '05-02', text: 'Tutorials.zip', icon: 'file' },
            { id: '05-03', text: 'Game.exe', icon: 'file' },
            { id: '05-04', text: 'TypeScript.7z', icon: 'file' },
        ]
    },
  ],
  fields: {iconCss: "icon" },
      
    };
  },
   components: {
    'ejs-listview': ListViewComponent
    }
  });

export default {
 
  components: {
    'ejs-splitter' : SplitterComponent,
    'e-panes': PanesDirective,
    'e-pane': PaneDirective,
   
  },
  data() {
    return {
    firstContent:  `<div>
    <h2>Data Grid</h2>
    The ASP.NET DataGrid control, or DataTable is a feature-rich control used to display data in a tabular format.
    </div>`,
    listviewTemplate: function() {
          return { template: listviewContent };
        },
    nestedTemplate: function (){
        return { template: nestedContent }
    }
    };
    },   
    methods: {
    onCreate: function () {
        this.splitterObj = new Splitter({
            orientation: 'Vertical'
        });
        this.splitterObj.appendTo('#vertical_splitter');
    }},
  
   
}
</script>
<template>
   
    <ejs-splitter ref='splitterObj'  width='600px' height='250px' :created='onCreate' >
           <e-panes>
               <e-pane size="25%" :content='firstContent' :collapsible='true' :resizable ='false'></e-pane>
               <e-pane size="15%" :content ='nestedTemplate' :collapsed='false' :collapsible='true'></e-pane>
               <e-pane :content='listviewTemplate' :collapsible='true' ></e-pane>
           </e-panes>
       </ejs-splitter>

   </template>
   
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-lists/styles/material.css';
.e-listview .e-list-icon {
  height: 24px;
  width: 30px;
}
.folder {
background-repeat: no-repeat;
background-image: url('https://ej2.syncfusion.com/react/demos/src/listview/images/file_icons.png');
background-position: -5px -466px;
background-size: 302%;
}
.file {
background-repeat: no-repeat;
background-image: url('https://ej2.syncfusion.com/react/demos/src/listview/images/file_icons.png');
background-position: -5px -151px;
background-size: 302%;
}

.nested {
    padding: 5px;
}

.vertical_splitter.e-splitter.e-splitter-vertical  {
  border: none;
}

</style>