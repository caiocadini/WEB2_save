/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todoList",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./src/pages/todoList/todo.module.css":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./src/pages/todoList/todo.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Raleway:wght@100;300&display=swap');\\r\\n\\r\\n.todo_container__tKdAX {\\r\\n    background-color: #5A5766;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    box-sizing: border-box;\\r\\n    font-family: 'Josefin Sans', sans-serif;\\r\\n}\\r\\n/*Page header (topbar)*/\\r\\n.todo_header__gfg88 {\\r\\n    margin: 20px; \\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    max-height: 75px;\\r\\n    text-align: center;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n/*Titulo da topbar*/\\r\\n.todo_titulo_header__5vd_Z {\\r\\n    color: #e3daff;\\r\\n    text-align: center;\\r\\n    font-size: 40px;\\r\\n    margin: auto;\\r\\n}\\r\\n.todo_user_welcome__FEmN5{\\r\\n    font-size: 15px;\\r\\n    color: #ffff;\\r\\n}\\r\\n/*Navigation hyperlinks*/\\r\\n.todo_add_activity__X2xPp{\\r\\n    color: #E3DAFF;\\r\\n    text-decoration: none;\\r\\n}\\r\\n.todo_exit_account__e5mCR{\\r\\n    margin: 20px;\\r\\n    color: #E3DAFF;\\r\\n    text-decoration: none;\\r\\n}\\r\\n.todo_header__gfg88 a:hover{\\r\\n    color:#C589E8;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n/* div com as 2 listas de tarefa (urgente+bom fazer)*/\\r\\n.todo_listas__yiJJ5 {\\r\\n    display: flex;\\r\\n    margin-top: 80px; \\r\\n}\\r\\n\\r\\n/*título URGENTE e BOM FAZER*/\\r\\n.todo_titulo_lista__w0ume{\\r\\n    color: #e3daff;\\r\\n    font-size: 32px;\\r\\n}\\r\\n\\r\\n/*div para a lista de urgente*/\\r\\n.todo_lista__jK_Xu {\\r\\n    width: 50%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n/*Linha de divisão*/\\r\\n.todo_line__EetTU{\\r\\n    border-left: 3px solid #ECFFF8;\\r\\n    border-radius: 3px;\\r\\n}\\r\\n\\r\\n.todo_atividades__FAx_U{\\r\\n    padding: 23px;\\r\\n    height: 550px;\\r\\n    width: 500px;\\r\\n    overflow: hidden;\\r\\n    overflow-y: scroll;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.todo_atividades__FAx_U::-webkit-scrollbar{\\r\\n    width: 10px;\\r\\n}\\r\\n\\r\\n.todo_atividades__FAx_U::-webkit-scrollbar-thumb{\\r\\n    background: #C589E8;\\r\\n}\\r\\n\\r\\n\\r\\n.todo_atividade_em_dia_container__y8rnx, .todo_atividade_atrasada_container__I8JX4{\\r\\n    padding: 5%;\\r\\n    margin: 3%;\\r\\n    width: 90%;\\r\\n    border-radius: 17px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo_atividade_em_dia_container__y8rnx{\\r\\n    background-color: #C589E8;\\r\\n}\\r\\n.todo_atividade_atrasada_container__I8JX4{\\r\\n    background-color: #F10000;\\r\\n}\\r\\n\\r\\n.todo_activity_text__VJrja{\\r\\n    width: 80%;\\r\\n}\\r\\n\\r\\n.todo_unchecked__WUQWi{\\r\\n    width: 51px; \\r\\n    height: 50px; \\r\\n    background-image: url('/unchecked.png'); \\r\\n    background-size: cover; \\r\\n}\\r\\n\\r\\n\\r\\n.todo_atividades__FAx_U h3{\\r\\n    font-size: 27px;\\r\\n    color: #ffff;\\r\\n}\\r\\n.todo_atividades__FAx_U span{\\r\\n    font-size: 15px;\\r\\n    color: #ffff;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 970px) {\\r\\n    .todo_header__gfg88{\\r\\n        width: 90%;\\r\\n    }\\r\\n    .todo_titulo_header__5vd_Z {\\r\\n        font-size: 20px;\\r\\n        padding-top: 5px;\\r\\n        align-self: center;\\r\\n    }\\r\\n    .todo_listas__yiJJ5 {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        max-height: 100vh;\\r\\n    }\\r\\n    .todo_lista__jK_Xu{\\r\\n        height: 40vh;\\r\\n    }\\r\\n\\r\\n    .todo_line__EetTU{\\r\\n        transform: rotate(90deg);\\r\\n        height: 300px;\\r\\n    }\\r\\n    .todo_titulo_lista__w0ume{\\r\\n        font-size: 18px;\\r\\n    }\\r\\n\\r\\n   \\r\\n\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 484px) {\\r\\n    .todo_user_welcome__FEmN5{\\r\\n        font-size: 3vw;\\r\\n    }\\r\\n\\r\\n    .todo_exit_account__e5mCR{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n    .todo_add_activity__X2xPp{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n\\r\\n    .todo_titulo_header__5vd_Z{\\r\\n        font-size: 5vw;\\r\\n    }\\r\\n\\r\\n    .todo_atividades__FAx_U{\\r\\n        padding: 2vw;\\r\\n        width: 56vw;\\r\\n    }\\r\\n\\r\\n    .todo_unchecked__WUQWi{\\r\\n        width: 13vw; \\r\\n        height: 13vw; \\r\\n    \\r\\n    }\\r\\n\\r\\n    .todo_listas__yiJJ5 .todo_lista__jK_Xu .todo_atividades__FAx_U{\\r\\n        width: 100vw;\\r\\n    }\\r\\n\\r\\n    .todo_activity_text__VJrja h3{\\r\\n        font-size: 6vw;\\r\\n    }\\r\\n    .todo_activity_text__VJrja span{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n\\r\\n    .todo_titulo_lista__w0ume{\\r\\n        font-size: 8vw;\\r\\n    }\\r\\n\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 300px) {\\r\\n    .todo_user_welcome__FEmN5{\\r\\n        font-size: 0vw;\\r\\n    }\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/pages/todoList/todo.module.css\"],\"names\":[],\"mappings\":\"AAAA,sHAAsH;;AAEtH;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,uCAAuC;AAC3C;AACA,uBAAuB;AACvB;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB;AACA,mBAAmB;AACnB;IACI,cAAc;IACd,kBAAkB;IAClB,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,YAAY;AAChB;AACA,wBAAwB;AACxB;IACI,cAAc;IACd,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,cAAc;IACd,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA,qDAAqD;AACrD;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA,6BAA6B;AAC7B;IACI,cAAc;IACd,eAAe;AACnB;;AAEA,8BAA8B;AAC9B;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA,mBAAmB;AACnB;IACI,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;;AAGA;IACI,WAAW;IACX,UAAU;IACV,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uCAAuC;IACvC,sBAAsB;AAC1B;;;AAGA;IACI,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,eAAe;QACf,gBAAgB;QAChB,kBAAkB;IACtB;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,uBAAuB;QACvB,iBAAiB;IACrB;IACA;QACI,YAAY;IAChB;;IAEA;QACI,wBAAwB;QACxB,aAAa;IACjB;IACA;QACI,eAAe;IACnB;;;;AAIJ;;AAEA;IACI;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;IACA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,YAAY;QACZ,WAAW;IACf;;IAEA;QACI,WAAW;QACX,YAAY;;IAEhB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,cAAc;IAClB;IACA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;AAEJ;;AAEA;IACI;QACI,cAAc;IAClB;AACJ\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Raleway:wght@100;300&display=swap');\\r\\n\\r\\n.container {\\r\\n    background-color: #5A5766;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    box-sizing: border-box;\\r\\n    font-family: 'Josefin Sans', sans-serif;\\r\\n}\\r\\n/*Page header (topbar)*/\\r\\n.header {\\r\\n    margin: 20px; \\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    max-height: 75px;\\r\\n    text-align: center;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n/*Titulo da topbar*/\\r\\n.titulo_header {\\r\\n    color: #e3daff;\\r\\n    text-align: center;\\r\\n    font-size: 40px;\\r\\n    margin: auto;\\r\\n}\\r\\n.user_welcome{\\r\\n    font-size: 15px;\\r\\n    color: #ffff;\\r\\n}\\r\\n/*Navigation hyperlinks*/\\r\\n.add_activity{\\r\\n    color: #E3DAFF;\\r\\n    text-decoration: none;\\r\\n}\\r\\n.exit_account{\\r\\n    margin: 20px;\\r\\n    color: #E3DAFF;\\r\\n    text-decoration: none;\\r\\n}\\r\\n.header a:hover{\\r\\n    color:#C589E8;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n/* div com as 2 listas de tarefa (urgente+bom fazer)*/\\r\\n.listas {\\r\\n    display: flex;\\r\\n    margin-top: 80px; \\r\\n}\\r\\n\\r\\n/*título URGENTE e BOM FAZER*/\\r\\n.titulo_lista{\\r\\n    color: #e3daff;\\r\\n    font-size: 32px;\\r\\n}\\r\\n\\r\\n/*div para a lista de urgente*/\\r\\n.lista {\\r\\n    width: 50%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n/*Linha de divisão*/\\r\\n.line{\\r\\n    border-left: 3px solid #ECFFF8;\\r\\n    border-radius: 3px;\\r\\n}\\r\\n\\r\\n.atividades{\\r\\n    padding: 23px;\\r\\n    height: 550px;\\r\\n    width: 500px;\\r\\n    overflow: hidden;\\r\\n    overflow-y: scroll;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.atividades::-webkit-scrollbar{\\r\\n    width: 10px;\\r\\n}\\r\\n\\r\\n.atividades::-webkit-scrollbar-thumb{\\r\\n    background: #C589E8;\\r\\n}\\r\\n\\r\\n\\r\\n.atividade_em_dia_container, .atividade_atrasada_container{\\r\\n    padding: 5%;\\r\\n    margin: 3%;\\r\\n    width: 90%;\\r\\n    border-radius: 17px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.atividade_em_dia_container{\\r\\n    background-color: #C589E8;\\r\\n}\\r\\n.atividade_atrasada_container{\\r\\n    background-color: #F10000;\\r\\n}\\r\\n\\r\\n.activity_text{\\r\\n    width: 80%;\\r\\n}\\r\\n\\r\\n.unchecked{\\r\\n    width: 51px; \\r\\n    height: 50px; \\r\\n    background-image: url('/unchecked.png'); \\r\\n    background-size: cover; \\r\\n}\\r\\n\\r\\n\\r\\n.atividades h3{\\r\\n    font-size: 27px;\\r\\n    color: #ffff;\\r\\n}\\r\\n.atividades span{\\r\\n    font-size: 15px;\\r\\n    color: #ffff;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 970px) {\\r\\n    .header{\\r\\n        width: 90%;\\r\\n    }\\r\\n    .titulo_header {\\r\\n        font-size: 20px;\\r\\n        padding-top: 5px;\\r\\n        align-self: center;\\r\\n    }\\r\\n    .listas {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        max-height: 100vh;\\r\\n    }\\r\\n    .lista{\\r\\n        height: 40vh;\\r\\n    }\\r\\n\\r\\n    .line{\\r\\n        transform: rotate(90deg);\\r\\n        height: 300px;\\r\\n    }\\r\\n    .titulo_lista{\\r\\n        font-size: 18px;\\r\\n    }\\r\\n\\r\\n   \\r\\n\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 484px) {\\r\\n    .user_welcome{\\r\\n        font-size: 3vw;\\r\\n    }\\r\\n\\r\\n    .exit_account{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n    .add_activity{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n\\r\\n    .titulo_header{\\r\\n        font-size: 5vw;\\r\\n    }\\r\\n\\r\\n    .atividades{\\r\\n        padding: 2vw;\\r\\n        width: 56vw;\\r\\n    }\\r\\n\\r\\n    .unchecked{\\r\\n        width: 13vw; \\r\\n        height: 13vw; \\r\\n    \\r\\n    }\\r\\n\\r\\n    .listas .lista .atividades{\\r\\n        width: 100vw;\\r\\n    }\\r\\n\\r\\n    .activity_text h3{\\r\\n        font-size: 6vw;\\r\\n    }\\r\\n    .activity_text span{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n\\r\\n    .titulo_lista{\\r\\n        font-size: 8vw;\\r\\n    }\\r\\n\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 300px) {\\r\\n    .user_welcome{\\r\\n        font-size: 0vw;\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"todo_container__tKdAX\",\n\t\"header\": \"todo_header__gfg88\",\n\t\"titulo_header\": \"todo_titulo_header__5vd_Z\",\n\t\"user_welcome\": \"todo_user_welcome__FEmN5\",\n\t\"add_activity\": \"todo_add_activity__X2xPp\",\n\t\"exit_account\": \"todo_exit_account__e5mCR\",\n\t\"listas\": \"todo_listas__yiJJ5\",\n\t\"titulo_lista\": \"todo_titulo_lista__w0ume\",\n\t\"lista\": \"todo_lista__jK_Xu\",\n\t\"line\": \"todo_line__EetTU\",\n\t\"atividades\": \"todo_atividades__FAx_U\",\n\t\"atividade_em_dia_container\": \"todo_atividade_em_dia_container__y8rnx\",\n\t\"atividade_atrasada_container\": \"todo_atividade_atrasada_container__I8JX4\",\n\t\"activity_text\": \"todo_activity_text__VJrja\",\n\t\"unchecked\": \"todo_unchecked__WUQWi\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbOF0udXNlWzJdIS4vc3JjL3BhZ2VzL3RvZG9MaXN0L3RvZG8ubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHlLQUFxRjtBQUMvSDtBQUNBO0FBQ0EsOElBQThJLG1CQUFtQixnQ0FBZ0Msa0NBQWtDLHFCQUFxQixzQkFBc0Isc0JBQXNCLCtCQUErQiwrQkFBK0IsZ0RBQWdELEtBQUsscURBQXFELHNCQUFzQixzQkFBc0IsNEJBQTRCLGdDQUFnQyx5QkFBeUIsMkJBQTJCLDRCQUE0QixLQUFLLHdEQUF3RCx1QkFBdUIsMkJBQTJCLHdCQUF3QixxQkFBcUIsS0FBSyw4QkFBOEIsd0JBQXdCLHFCQUFxQixLQUFLLDJEQUEyRCx1QkFBdUIsOEJBQThCLEtBQUssOEJBQThCLHFCQUFxQix1QkFBdUIsOEJBQThCLEtBQUssZ0NBQWdDLHNCQUFzQix3QkFBd0IsS0FBSyx1RkFBdUYsc0JBQXNCLDBCQUEwQixLQUFLLG9FQUFvRSx1QkFBdUIsd0JBQXdCLEtBQUssK0RBQStELG1CQUFtQixzQkFBc0IsK0JBQStCLDRCQUE0QixLQUFLLDhDQUE4Qyx1Q0FBdUMsMkJBQTJCLEtBQUssZ0NBQWdDLHNCQUFzQixzQkFBc0IscUJBQXFCLHlCQUF5QiwyQkFBMkIsc0JBQXNCLCtCQUErQiw0QkFBNEIsS0FBSyxtREFBbUQsb0JBQW9CLEtBQUsseURBQXlELDRCQUE0QixLQUFLLCtGQUErRixvQkFBb0IsbUJBQW1CLG1CQUFtQiw0QkFBNEIsc0JBQXNCLDRCQUE0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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RvZG9MaXN0L3RvZG8ubW9kdWxlLmNzcz84YWZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEA3MDAmZmFtaWx5PVJhbGV3YXk6d2dodEAxMDA7MzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi50b2RvX2NvbnRhaW5lcl9fdEtkQVgge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUE1NzY2O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLypQYWdlIGhlYWRlciAodG9wYmFyKSovXFxyXFxuLnRvZG9faGVhZGVyX19nZmc4OCB7XFxyXFxuICAgIG1hcmdpbjogMjBweDsgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA3NXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcbi8qVGl0dWxvIGRhIHRvcGJhciovXFxyXFxuLnRvZG9fdGl0dWxvX2hlYWRlcl9fNXZkX1oge1xcclxcbiAgICBjb2xvcjogI2UzZGFmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuLnRvZG9fdXNlcl93ZWxjb21lX19GRW1ONXtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBjb2xvcjogI2ZmZmY7XFxyXFxufVxcclxcbi8qTmF2aWdhdGlvbiBoeXBlcmxpbmtzKi9cXHJcXG4udG9kb19hZGRfYWN0aXZpdHlfX1gyeFBwe1xcclxcbiAgICBjb2xvcjogI0UzREFGRjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4udG9kb19leGl0X2FjY291bnRfX2U1bUNSe1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjRTNEQUZGO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi50b2RvX2hlYWRlcl9fZ2ZnODggYTpob3ZlcntcXHJcXG4gICAgY29sb3I6I0M1ODlFODtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkaXYgY29tIGFzIDIgbGlzdGFzIGRlIHRhcmVmYSAodXJnZW50ZStib20gZmF6ZXIpKi9cXHJcXG4udG9kb19saXN0YXNfX3lpSko1IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLXRvcDogODBweDsgXFxyXFxufVxcclxcblxcclxcbi8qdMOtdHVsbyBVUkdFTlRFIGUgQk9NIEZBWkVSKi9cXHJcXG4udG9kb190aXR1bG9fbGlzdGFfX3cwdW1le1xcclxcbiAgICBjb2xvcjogI2UzZGFmZjtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKmRpdiBwYXJhIGEgbGlzdGEgZGUgdXJnZW50ZSovXFxyXFxuLnRvZG9fbGlzdGFfX2pLX1h1IHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLypMaW5oYSBkZSBkaXZpc8OjbyovXFxyXFxuLnRvZG9fbGluZV9fRWV0VFV7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI0VDRkZGODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb19hdGl2aWRhZGVzX19GQXhfVXtcXHJcXG4gICAgcGFkZGluZzogMjNweDtcXHJcXG4gICAgaGVpZ2h0OiA1NTBweDtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvX2F0aXZpZGFkZXNfX0ZBeF9VOjotd2Via2l0LXNjcm9sbGJhcntcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvX2F0aXZpZGFkZXNfX0ZBeF9VOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXHJcXG4gICAgYmFja2dyb3VuZDogI0M1ODlFODtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvZG9fYXRpdmlkYWRlX2VtX2RpYV9jb250YWluZXJfX3k4cm54LCAudG9kb19hdGl2aWRhZGVfYXRyYXNhZGFfY29udGFpbmVyX19JOEpYNHtcXHJcXG4gICAgcGFkZGluZzogNSU7XFxyXFxuICAgIG1hcmdpbjogMyU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9fYXRpdmlkYWRlX2VtX2RpYV9jb250YWluZXJfX3k4cm54e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzU4OUU4O1xcclxcbn1cXHJcXG4udG9kb19hdGl2aWRhZGVfYXRyYXNhZGFfY29udGFpbmVyX19JOEpYNHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9fYWN0aXZpdHlfdGV4dF9fVkpyamF7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvX3VuY2hlY2tlZF9fV1VRV2l7XFxyXFxuICAgIHdpZHRoOiA1MXB4OyBcXHJcXG4gICAgaGVpZ2h0OiA1MHB4OyBcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvdW5jaGVja2VkLnBuZycpOyBcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXFxyXFxufVxcclxcblxcclxcblxcclxcbi50b2RvX2F0aXZpZGFkZXNfX0ZBeF9VIGgze1xcclxcbiAgICBmb250LXNpemU6IDI3cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmZjtcXHJcXG59XFxyXFxuLnRvZG9fYXRpdmlkYWRlc19fRkF4X1Ugc3BhbntcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBjb2xvcjogI2ZmZmY7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTcwcHgpIHtcXHJcXG4gICAgLnRvZG9faGVhZGVyX19nZmc4OHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRvZG9fdGl0dWxvX2hlYWRlcl9fNXZkX1oge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAudG9kb19saXN0YXNfX3lpSko1IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRvZG9fbGlzdGFfX2pLX1h1e1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvX2xpbmVfX0VldFRVe1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAudG9kb190aXR1bG9fbGlzdGFfX3cwdW1le1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDg0cHgpIHtcXHJcXG4gICAgLnRvZG9fdXNlcl93ZWxjb21lX19GRW1ONXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvX2V4aXRfYWNjb3VudF9fZTVtQ1J7XFxyXFxuICAgICAgICBmb250LXNpemU6IDR2dztcXHJcXG4gICAgfVxcclxcbiAgICAudG9kb19hZGRfYWN0aXZpdHlfX1gyeFBwe1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvZG9fdGl0dWxvX2hlYWRlcl9fNXZkX1p7XFxyXFxuICAgICAgICBmb250LXNpemU6IDV2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9kb19hdGl2aWRhZGVzX19GQXhfVXtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJ2dztcXHJcXG4gICAgICAgIHdpZHRoOiA1NnZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvX3VuY2hlY2tlZF9fV1VRV2l7XFxyXFxuICAgICAgICB3aWR0aDogMTN2dzsgXFxyXFxuICAgICAgICBoZWlnaHQ6IDEzdnc7IFxcclxcbiAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9kb19saXN0YXNfX3lpSko1IC50b2RvX2xpc3RhX19qS19YdSAudG9kb19hdGl2aWRhZGVzX19GQXhfVXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9kb19hY3Rpdml0eV90ZXh0X19WSnJqYSBoM3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNnZ3O1xcclxcbiAgICB9XFxyXFxuICAgIC50b2RvX2FjdGl2aXR5X3RleHRfX1ZKcmphIHNwYW57XFxyXFxuICAgICAgICBmb250LXNpemU6IDR2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9kb190aXR1bG9fbGlzdGFfX3cwdW1le1xcclxcbiAgICAgICAgZm9udC1zaXplOiA4dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xcclxcbiAgICAudG9kb191c2VyX3dlbGNvbWVfX0ZFbU41e1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwdnc7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9wYWdlcy90b2RvTGlzdC90b2RvLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsc0hBQXNIOztBQUV0SDtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHVDQUF1QztBQUMzQztBQUNBLHVCQUF1QjtBQUN2QjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBLG1CQUFtQjtBQUNuQjtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0Esd0JBQXdCO0FBQ3hCO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBLHFEQUFxRDtBQUNyRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUEsNkJBQTZCO0FBQzdCO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUEsOEJBQThCO0FBQzlCO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0EsbUJBQW1CO0FBQ25CO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlO0lBQ25COzs7O0FBSUo7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTs7SUFFaEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEA3MDAmZmFtaWx5PVJhbGV3YXk6d2dodEAxMDA7MzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUE1NzY2O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLypQYWdlIGhlYWRlciAodG9wYmFyKSovXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIG1hcmdpbjogMjBweDsgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA3NXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcbi8qVGl0dWxvIGRhIHRvcGJhciovXFxyXFxuLnRpdHVsb19oZWFkZXIge1xcclxcbiAgICBjb2xvcjogI2UzZGFmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuLnVzZXJfd2VsY29tZXtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBjb2xvcjogI2ZmZmY7XFxyXFxufVxcclxcbi8qTmF2aWdhdGlvbiBoeXBlcmxpbmtzKi9cXHJcXG4uYWRkX2FjdGl2aXR5e1xcclxcbiAgICBjb2xvcjogI0UzREFGRjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4uZXhpdF9hY2NvdW50e1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjRTNEQUZGO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5oZWFkZXIgYTpob3ZlcntcXHJcXG4gICAgY29sb3I6I0M1ODlFODtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkaXYgY29tIGFzIDIgbGlzdGFzIGRlIHRhcmVmYSAodXJnZW50ZStib20gZmF6ZXIpKi9cXHJcXG4ubGlzdGFzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLXRvcDogODBweDsgXFxyXFxufVxcclxcblxcclxcbi8qdMOtdHVsbyBVUkdFTlRFIGUgQk9NIEZBWkVSKi9cXHJcXG4udGl0dWxvX2xpc3Rhe1xcclxcbiAgICBjb2xvcjogI2UzZGFmZjtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKmRpdiBwYXJhIGEgbGlzdGEgZGUgdXJnZW50ZSovXFxyXFxuLmxpc3RhIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLypMaW5oYSBkZSBkaXZpc8OjbyovXFxyXFxuLmxpbmV7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI0VDRkZGODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXRpdmlkYWRlc3tcXHJcXG4gICAgcGFkZGluZzogMjNweDtcXHJcXG4gICAgaGVpZ2h0OiA1NTBweDtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hdGl2aWRhZGVzOjotd2Via2l0LXNjcm9sbGJhcntcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hdGl2aWRhZGVzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXHJcXG4gICAgYmFja2dyb3VuZDogI0M1ODlFODtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmF0aXZpZGFkZV9lbV9kaWFfY29udGFpbmVyLCAuYXRpdmlkYWRlX2F0cmFzYWRhX2NvbnRhaW5lcntcXHJcXG4gICAgcGFkZGluZzogNSU7XFxyXFxuICAgIG1hcmdpbjogMyU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmF0aXZpZGFkZV9lbV9kaWFfY29udGFpbmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzU4OUU4O1xcclxcbn1cXHJcXG4uYXRpdmlkYWRlX2F0cmFzYWRhX2NvbnRhaW5lcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2aXR5X3RleHR7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi51bmNoZWNrZWR7XFxyXFxuICAgIHdpZHRoOiA1MXB4OyBcXHJcXG4gICAgaGVpZ2h0OiA1MHB4OyBcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvdW5jaGVja2VkLnBuZycpOyBcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXFxyXFxufVxcclxcblxcclxcblxcclxcbi5hdGl2aWRhZGVzIGgze1xcclxcbiAgICBmb250LXNpemU6IDI3cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmZjtcXHJcXG59XFxyXFxuLmF0aXZpZGFkZXMgc3BhbntcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBjb2xvcjogI2ZmZmY7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTcwcHgpIHtcXHJcXG4gICAgLmhlYWRlcntcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRpdHVsb19oZWFkZXIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAubGlzdGFzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmxpc3Rhe1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5saW5le1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAudGl0dWxvX2xpc3Rhe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDg0cHgpIHtcXHJcXG4gICAgLnVzZXJfd2VsY29tZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5leGl0X2FjY291bnR7XFxyXFxuICAgICAgICBmb250LXNpemU6IDR2dztcXHJcXG4gICAgfVxcclxcbiAgICAuYWRkX2FjdGl2aXR5e1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRpdHVsb19oZWFkZXJ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDV2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXRpdmlkYWRlc3tcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJ2dztcXHJcXG4gICAgICAgIHdpZHRoOiA1NnZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC51bmNoZWNrZWR7XFxyXFxuICAgICAgICB3aWR0aDogMTN2dzsgXFxyXFxuICAgICAgICBoZWlnaHQ6IDEzdnc7IFxcclxcbiAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGlzdGFzIC5saXN0YSAuYXRpdmlkYWRlc3tcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWN0aXZpdHlfdGV4dCBoM3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNnZ3O1xcclxcbiAgICB9XFxyXFxuICAgIC5hY3Rpdml0eV90ZXh0IHNwYW57XFxyXFxuICAgICAgICBmb250LXNpemU6IDR2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGl0dWxvX2xpc3Rhe1xcclxcbiAgICAgICAgZm9udC1zaXplOiA4dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xcclxcbiAgICAudXNlcl93ZWxjb21le1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwdnc7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwidG9kb19jb250YWluZXJfX3RLZEFYXCIsXG5cdFwiaGVhZGVyXCI6IFwidG9kb19oZWFkZXJfX2dmZzg4XCIsXG5cdFwidGl0dWxvX2hlYWRlclwiOiBcInRvZG9fdGl0dWxvX2hlYWRlcl9fNXZkX1pcIixcblx0XCJ1c2VyX3dlbGNvbWVcIjogXCJ0b2RvX3VzZXJfd2VsY29tZV9fRkVtTjVcIixcblx0XCJhZGRfYWN0aXZpdHlcIjogXCJ0b2RvX2FkZF9hY3Rpdml0eV9fWDJ4UHBcIixcblx0XCJleGl0X2FjY291bnRcIjogXCJ0b2RvX2V4aXRfYWNjb3VudF9fZTVtQ1JcIixcblx0XCJsaXN0YXNcIjogXCJ0b2RvX2xpc3Rhc19feWlKSjVcIixcblx0XCJ0aXR1bG9fbGlzdGFcIjogXCJ0b2RvX3RpdHVsb19saXN0YV9fdzB1bWVcIixcblx0XCJsaXN0YVwiOiBcInRvZG9fbGlzdGFfX2pLX1h1XCIsXG5cdFwibGluZVwiOiBcInRvZG9fbGluZV9fRWV0VFVcIixcblx0XCJhdGl2aWRhZGVzXCI6IFwidG9kb19hdGl2aWRhZGVzX19GQXhfVVwiLFxuXHRcImF0aXZpZGFkZV9lbV9kaWFfY29udGFpbmVyXCI6IFwidG9kb19hdGl2aWRhZGVfZW1fZGlhX2NvbnRhaW5lcl9feThybnhcIixcblx0XCJhdGl2aWRhZGVfYXRyYXNhZGFfY29udGFpbmVyXCI6IFwidG9kb19hdGl2aWRhZGVfYXRyYXNhZGFfY29udGFpbmVyX19JOEpYNFwiLFxuXHRcImFjdGl2aXR5X3RleHRcIjogXCJ0b2RvX2FjdGl2aXR5X3RleHRfX1ZKcmphXCIsXG5cdFwidW5jaGVja2VkXCI6IFwidG9kb191bmNoZWNrZWRfX1dVUVdpXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./src/pages/todoList/todo.module.css\n"));

/***/ })

});