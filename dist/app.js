!function(e){var o={};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)n.d(t,r,function(o){return e[o]}.bind(null,r));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=332)}({332:function(e,o,n){"use strict";!function(){function e(){console.log("setColor() called"),Excel.run(function(e){return e.workbook.getSelectedRange().format.fill.color="green",e.sync()}).catch(function(e){console.log("Error: "+e),e instanceof OfficeExtension.Error&&console.log("Debug info: "+JSON.stringify(e.debugInfo))})}Office.onReady(function(){console.log("Office is ready"),Office.context.requirements.isSetSupported("ExcelApi",1.7)||console.log("Sorry. The tutorial add-in uses Excel.js APIs that are not available in your version of Office."),$(document).ready(function(){console.log("Document is ready");var o=$("#set-color");console.log(o),o.click(e)})})}(),$("#create-table").click(function(){Excel.run(function(e){var o=e.workbook.worksheets.getActiveWorksheet(),n=o.tables.add("A1:D1",!0);return n.name="ExpensesTable",n.getHeaderRowRange().values=[["Date","Merchant","Category","Amount"]],n.rows.add(null,[["1/1/2017","The Phone Company","Communications","120"],["1/2/2017","Northwind Electric Cars","Transportation","142.33"],["1/5/2017","Best For You Organics Company","Groceries","27.9"],["1/10/2017","Coho Vineyard","Restaurant","33"],["1/11/2017","Bellows College","Education","350.1"],["1/15/2017","Trey Research","Other","135"],["1/15/2017","Best For You Organics Company","Groceries","97.88"]]),n.columns.getItemAt(3).getRange().numberFormat=[["€#,##0.00"]],n.getRange().format.autofitColumns(),n.getRange().format.autofitRows(),e.sync()}).catch(function(e){console.log("Error: "+e),e instanceof OfficeExtension.Error&&console.log("Debug info: "+JSON.stringify(e.debugInfo))})})}});