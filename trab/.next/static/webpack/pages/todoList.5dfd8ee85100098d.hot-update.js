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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Raleway:wght@100;300&display=swap');\\r\\n\\r\\n.todo_container__tKdAX {\\r\\n    background-color: #5A5766;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    box-sizing: border-box;\\r\\n    font-family: 'Josefin Sans', sans-serif;\\r\\n    flex-grow: 1;\\r\\n}\\r\\n/*Page header (topbar)*/\\r\\n.todo_header__gfg88 {\\r\\n    margin: 20px; \\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    /*max-height: 75px;*/\\r\\n    text-align: center;\\r\\n    /*margin-bottom: 10px;*/\\r\\n}\\r\\n/*Titulo da topbar*/\\r\\n.todo_titulo_header__5vd_Z {\\r\\n    color: #e3daff;\\r\\n    text-align: center;\\r\\n    font-size: 40px;\\r\\n    margin: auto;\\r\\n}\\r\\n.todo_user_welcome__FEmN5{\\r\\n    font-size: 15px;\\r\\n    color: #ffff;\\r\\n}\\r\\n/*Navigation hyperlinks*/\\r\\n.todo_add_activity__X2xPp{\\r\\n    color: #E3DAFF;\\r\\n    text-decoration: none;\\r\\n}\\r\\n.todo_exit_account__e5mCR{\\r\\n    margin: 20px;\\r\\n    color: #E3DAFF;\\r\\n    text-decoration: none;\\r\\n}\\r\\n.todo_header__gfg88 a:hover{\\r\\n    color:#C589E8;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n/* div com as 2 listas de tarefa (urgente+bom fazer)*/\\r\\n.todo_listas__yiJJ5 {\\r\\n    display: flex;\\r\\n    margin-top: 80px; \\r\\n}\\r\\n\\r\\n/*título URGENTE e BOM FAZER*/\\r\\n.todo_titulo_lista__w0ume{\\r\\n    color: #e3daff;\\r\\n    font-size: 32px;\\r\\n}\\r\\n\\r\\n/*div para a lista de urgente*/\\r\\n.todo_lista__jK_Xu {\\r\\n    width: 50%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n/*Linha de divisão*/\\r\\n.todo_line__EetTU{\\r\\n    border-left: 3px solid #ECFFF8;\\r\\n    border-radius: 3px;\\r\\n}\\r\\n\\r\\n.todo_atividades__FAx_U{\\r\\n    padding: 23px;\\r\\n    /*height: 550px;*/\\r\\n    width: 500px;\\r\\n    overflow: hidden;\\r\\n    overflow-y: scroll;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.todo_atividades__FAx_U::-webkit-scrollbar{\\r\\n    width: 10px;\\r\\n}\\r\\n\\r\\n.todo_atividades__FAx_U::-webkit-scrollbar-thumb{\\r\\n    background: #C589E8;\\r\\n}\\r\\n\\r\\n\\r\\n.todo_atividade_em_dia_container__y8rnx, .todo_atividade_atrasada_container__I8JX4{\\r\\n    padding: 5%;\\r\\n    margin: 3%;\\r\\n    width: 90%;\\r\\n    border-radius: 17px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo_atividade_em_dia_container__y8rnx{\\r\\n    background-color: #C589E8;\\r\\n}\\r\\n.todo_atividade_atrasada_container__I8JX4{\\r\\n    background-color: #F10000;\\r\\n}\\r\\n\\r\\n.todo_activity_text__VJrja{\\r\\n    width: 80%;\\r\\n}\\r\\n\\r\\n.todo_unchecked__WUQWi{\\r\\n    width: 51px; \\r\\n    height: 50px; \\r\\n    background-image: url('/unchecked.png'); \\r\\n    background-size: cover; \\r\\n}\\r\\n\\r\\n\\r\\n.todo_atividades__FAx_U h3{\\r\\n    font-size: 27px;\\r\\n    color: #ffff;\\r\\n}\\r\\n.todo_atividades__FAx_U span{\\r\\n    font-size: 15px;\\r\\n    color: #ffff;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 970px) {\\r\\n    .todo_header__gfg88{\\r\\n        width: 90%;\\r\\n    }\\r\\n    .todo_titulo_header__5vd_Z {\\r\\n        font-size: 20px;\\r\\n        padding-top: 5px;\\r\\n        align-self: center;\\r\\n    }\\r\\n    .todo_listas__yiJJ5 {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        max-height: 100vh;\\r\\n    }\\r\\n    .todo_lista__jK_Xu{\\r\\n        height: 40vh;\\r\\n    }\\r\\n\\r\\n    .todo_line__EetTU{\\r\\n        transform: rotate(90deg);\\r\\n        height: 300px;\\r\\n    }\\r\\n    .todo_titulo_lista__w0ume{\\r\\n        font-size: 18px;\\r\\n    }\\r\\n\\r\\n   \\r\\n\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 484px) {\\r\\n    .todo_user_welcome__FEmN5{\\r\\n        font-size: 3vw;\\r\\n    }\\r\\n\\r\\n    .todo_exit_account__e5mCR{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n    .todo_add_activity__X2xPp{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n\\r\\n    .todo_titulo_header__5vd_Z{\\r\\n        font-size: 5vw;\\r\\n    }\\r\\n\\r\\n    .todo_atividades__FAx_U{\\r\\n        padding: 2vw;\\r\\n        width: 56vw;\\r\\n    }\\r\\n\\r\\n    .todo_unchecked__WUQWi{\\r\\n        width: 13vw; \\r\\n        height: 13vw; \\r\\n    \\r\\n    }\\r\\n\\r\\n    .todo_listas__yiJJ5 .todo_lista__jK_Xu .todo_atividades__FAx_U{\\r\\n        width: 100vw;\\r\\n    }\\r\\n\\r\\n    .todo_activity_text__VJrja h3{\\r\\n        font-size: 6vw;\\r\\n    }\\r\\n    .todo_activity_text__VJrja span{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n\\r\\n    .todo_titulo_lista__w0ume{\\r\\n        font-size: 8vw;\\r\\n    }\\r\\n\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 300px) {\\r\\n    .todo_user_welcome__FEmN5{\\r\\n        font-size: 0vw;\\r\\n    }\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/pages/todoList/todo.module.css\"],\"names\":[],\"mappings\":\"AAAA,sHAAsH;;AAEtH;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,uCAAuC;IACvC,YAAY;AAChB;AACA,uBAAuB;AACvB;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,oBAAoB;IACpB,kBAAkB;IAClB,uBAAuB;AAC3B;AACA,mBAAmB;AACnB;IACI,cAAc;IACd,kBAAkB;IAClB,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,YAAY;AAChB;AACA,wBAAwB;AACxB;IACI,cAAc;IACd,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,cAAc;IACd,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA,qDAAqD;AACrD;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA,6BAA6B;AAC7B;IACI,cAAc;IACd,eAAe;AACnB;;AAEA,8BAA8B;AAC9B;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA,mBAAmB;AACnB;IACI,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;;AAGA;IACI,WAAW;IACX,UAAU;IACV,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uCAAuC;IACvC,sBAAsB;AAC1B;;;AAGA;IACI,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,eAAe;QACf,gBAAgB;QAChB,kBAAkB;IACtB;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,uBAAuB;QACvB,iBAAiB;IACrB;IACA;QACI,YAAY;IAChB;;IAEA;QACI,wBAAwB;QACxB,aAAa;IACjB;IACA;QACI,eAAe;IACnB;;;;AAIJ;;AAEA;IACI;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;IACA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,YAAY;QACZ,WAAW;IACf;;IAEA;QACI,WAAW;QACX,YAAY;;IAEhB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,cAAc;IAClB;IACA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;AAEJ;;AAEA;IACI;QACI,cAAc;IAClB;AACJ\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Raleway:wght@100;300&display=swap');\\r\\n\\r\\n.container {\\r\\n    background-color: #5A5766;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    box-sizing: border-box;\\r\\n    font-family: 'Josefin Sans', sans-serif;\\r\\n    flex-grow: 1;\\r\\n}\\r\\n/*Page header (topbar)*/\\r\\n.header {\\r\\n    margin: 20px; \\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    /*max-height: 75px;*/\\r\\n    text-align: center;\\r\\n    /*margin-bottom: 10px;*/\\r\\n}\\r\\n/*Titulo da topbar*/\\r\\n.titulo_header {\\r\\n    color: #e3daff;\\r\\n    text-align: center;\\r\\n    font-size: 40px;\\r\\n    margin: auto;\\r\\n}\\r\\n.user_welcome{\\r\\n    font-size: 15px;\\r\\n    color: #ffff;\\r\\n}\\r\\n/*Navigation hyperlinks*/\\r\\n.add_activity{\\r\\n    color: #E3DAFF;\\r\\n    text-decoration: none;\\r\\n}\\r\\n.exit_account{\\r\\n    margin: 20px;\\r\\n    color: #E3DAFF;\\r\\n    text-decoration: none;\\r\\n}\\r\\n.header a:hover{\\r\\n    color:#C589E8;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n/* div com as 2 listas de tarefa (urgente+bom fazer)*/\\r\\n.listas {\\r\\n    display: flex;\\r\\n    margin-top: 80px; \\r\\n}\\r\\n\\r\\n/*título URGENTE e BOM FAZER*/\\r\\n.titulo_lista{\\r\\n    color: #e3daff;\\r\\n    font-size: 32px;\\r\\n}\\r\\n\\r\\n/*div para a lista de urgente*/\\r\\n.lista {\\r\\n    width: 50%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n/*Linha de divisão*/\\r\\n.line{\\r\\n    border-left: 3px solid #ECFFF8;\\r\\n    border-radius: 3px;\\r\\n}\\r\\n\\r\\n.atividades{\\r\\n    padding: 23px;\\r\\n    /*height: 550px;*/\\r\\n    width: 500px;\\r\\n    overflow: hidden;\\r\\n    overflow-y: scroll;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.atividades::-webkit-scrollbar{\\r\\n    width: 10px;\\r\\n}\\r\\n\\r\\n.atividades::-webkit-scrollbar-thumb{\\r\\n    background: #C589E8;\\r\\n}\\r\\n\\r\\n\\r\\n.atividade_em_dia_container, .atividade_atrasada_container{\\r\\n    padding: 5%;\\r\\n    margin: 3%;\\r\\n    width: 90%;\\r\\n    border-radius: 17px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.atividade_em_dia_container{\\r\\n    background-color: #C589E8;\\r\\n}\\r\\n.atividade_atrasada_container{\\r\\n    background-color: #F10000;\\r\\n}\\r\\n\\r\\n.activity_text{\\r\\n    width: 80%;\\r\\n}\\r\\n\\r\\n.unchecked{\\r\\n    width: 51px; \\r\\n    height: 50px; \\r\\n    background-image: url('/unchecked.png'); \\r\\n    background-size: cover; \\r\\n}\\r\\n\\r\\n\\r\\n.atividades h3{\\r\\n    font-size: 27px;\\r\\n    color: #ffff;\\r\\n}\\r\\n.atividades span{\\r\\n    font-size: 15px;\\r\\n    color: #ffff;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 970px) {\\r\\n    .header{\\r\\n        width: 90%;\\r\\n    }\\r\\n    .titulo_header {\\r\\n        font-size: 20px;\\r\\n        padding-top: 5px;\\r\\n        align-self: center;\\r\\n    }\\r\\n    .listas {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        max-height: 100vh;\\r\\n    }\\r\\n    .lista{\\r\\n        height: 40vh;\\r\\n    }\\r\\n\\r\\n    .line{\\r\\n        transform: rotate(90deg);\\r\\n        height: 300px;\\r\\n    }\\r\\n    .titulo_lista{\\r\\n        font-size: 18px;\\r\\n    }\\r\\n\\r\\n   \\r\\n\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 484px) {\\r\\n    .user_welcome{\\r\\n        font-size: 3vw;\\r\\n    }\\r\\n\\r\\n    .exit_account{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n    .add_activity{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n\\r\\n    .titulo_header{\\r\\n        font-size: 5vw;\\r\\n    }\\r\\n\\r\\n    .atividades{\\r\\n        padding: 2vw;\\r\\n        width: 56vw;\\r\\n    }\\r\\n\\r\\n    .unchecked{\\r\\n        width: 13vw; \\r\\n        height: 13vw; \\r\\n    \\r\\n    }\\r\\n\\r\\n    .listas .lista .atividades{\\r\\n        width: 100vw;\\r\\n    }\\r\\n\\r\\n    .activity_text h3{\\r\\n        font-size: 6vw;\\r\\n    }\\r\\n    .activity_text span{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n\\r\\n    .titulo_lista{\\r\\n        font-size: 8vw;\\r\\n    }\\r\\n\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 300px) {\\r\\n    .user_welcome{\\r\\n        font-size: 0vw;\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"todo_container__tKdAX\",\n\t\"header\": \"todo_header__gfg88\",\n\t\"titulo_header\": \"todo_titulo_header__5vd_Z\",\n\t\"user_welcome\": \"todo_user_welcome__FEmN5\",\n\t\"add_activity\": \"todo_add_activity__X2xPp\",\n\t\"exit_account\": \"todo_exit_account__e5mCR\",\n\t\"listas\": \"todo_listas__yiJJ5\",\n\t\"titulo_lista\": \"todo_titulo_lista__w0ume\",\n\t\"lista\": \"todo_lista__jK_Xu\",\n\t\"line\": \"todo_line__EetTU\",\n\t\"atividades\": \"todo_atividades__FAx_U\",\n\t\"atividade_em_dia_container\": \"todo_atividade_em_dia_container__y8rnx\",\n\t\"atividade_atrasada_container\": \"todo_atividade_atrasada_container__I8JX4\",\n\t\"activity_text\": \"todo_activity_text__VJrja\",\n\t\"unchecked\": \"todo_unchecked__WUQWi\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbOF0udXNlWzJdIS4vc3JjL3BhZ2VzL3RvZG9MaXN0L3RvZG8ubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHlLQUFxRjtBQUMvSDtBQUNBO0FBQ0EsOElBQThJLG1CQUFtQixnQ0FBZ0Msa0NBQWtDLHFCQUFxQixzQkFBc0Isc0JBQXNCLCtCQUErQiwrQkFBK0IsZ0RBQWdELHFCQUFxQixLQUFLLHFEQUFxRCxzQkFBc0Isc0JBQXNCLDRCQUE0QixnQ0FBZ0MsMkJBQTJCLDZCQUE2Qiw4QkFBOEIsT0FBTyx3REFBd0QsdUJBQXVCLDJCQUEyQix3QkFBd0IscUJBQXFCLEtBQUssOEJBQThCLHdCQUF3QixxQkFBcUIsS0FBSywyREFBMkQsdUJBQXVCLDhCQUE4QixLQUFLLDhCQUE4QixxQkFBcUIsdUJBQXVCLDhCQUE4QixLQUFLLGdDQUFnQyxzQkFBc0Isd0JBQXdCLEtBQUssdUZBQXVGLHNCQUFzQiwwQkFBMEIsS0FBSyxvRUFBb0UsdUJBQXVCLHdCQUF3QixLQUFLLCtEQUErRCxtQkFBbUIsc0JBQXNCLCtCQUErQiw0QkFBNEIsS0FBSyw4Q0FBOEMsdUNBQXVDLDJCQUEyQixLQUFLLGdDQUFnQyxzQkFBc0Isd0JBQXdCLHVCQUF1Qix5QkFBeUIsMkJBQTJCLHNCQUFzQiwrQkFBK0IsNEJBQTRCLEtBQUssbURBQW1ELG9CQUFvQixLQUFLLHlEQUF5RCw0QkFBNEIsS0FBSywrRkFBK0Ysb0JBQW9CLG1CQUFtQixtQkFBbUIsNEJBQTRCLHNCQUFz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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90b2RvTGlzdC90b2RvLm1vZHVsZS5jc3M/OGFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANzAwJmZhbWlseT1SYWxld2F5OndnaHRAMTAwOzMwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4udG9kb19jb250YWluZXJfX3RLZEFYIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBNTc2NjtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuLypQYWdlIGhlYWRlciAodG9wYmFyKSovXFxyXFxuLnRvZG9faGVhZGVyX19nZmc4OCB7XFxyXFxuICAgIG1hcmdpbjogMjBweDsgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAvKm1heC1oZWlnaHQ6IDc1cHg7Ki9cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAvKm1hcmdpbi1ib3R0b206IDEwcHg7Ki9cXHJcXG59XFxyXFxuLypUaXR1bG8gZGEgdG9wYmFyKi9cXHJcXG4udG9kb190aXR1bG9faGVhZGVyX181dmRfWiB7XFxyXFxuICAgIGNvbG9yOiAjZTNkYWZmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG4udG9kb191c2VyX3dlbGNvbWVfX0ZFbU41e1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmZjtcXHJcXG59XFxyXFxuLypOYXZpZ2F0aW9uIGh5cGVybGlua3MqL1xcclxcbi50b2RvX2FkZF9hY3Rpdml0eV9fWDJ4UHB7XFxyXFxuICAgIGNvbG9yOiAjRTNEQUZGO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi50b2RvX2V4aXRfYWNjb3VudF9fZTVtQ1J7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgY29sb3I6ICNFM0RBRkY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLnRvZG9faGVhZGVyX19nZmc4OCBhOmhvdmVye1xcclxcbiAgICBjb2xvcjojQzU4OUU4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIGRpdiBjb20gYXMgMiBsaXN0YXMgZGUgdGFyZWZhICh1cmdlbnRlK2JvbSBmYXplcikqL1xcclxcbi50b2RvX2xpc3Rhc19feWlKSjUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA4MHB4OyBcXHJcXG59XFxyXFxuXFxyXFxuLyp0w610dWxvIFVSR0VOVEUgZSBCT00gRkFaRVIqL1xcclxcbi50b2RvX3RpdHVsb19saXN0YV9fdzB1bWV7XFxyXFxuICAgIGNvbG9yOiAjZTNkYWZmO1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi8qZGl2IHBhcmEgYSBsaXN0YSBkZSB1cmdlbnRlKi9cXHJcXG4udG9kb19saXN0YV9faktfWHUge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4vKkxpbmhhIGRlIGRpdmlzw6NvKi9cXHJcXG4udG9kb19saW5lX19FZXRUVXtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjRUNGRkY4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvX2F0aXZpZGFkZXNfX0ZBeF9Ve1xcclxcbiAgICBwYWRkaW5nOiAyM3B4O1xcclxcbiAgICAvKmhlaWdodDogNTUwcHg7Ki9cXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvX2F0aXZpZGFkZXNfX0ZBeF9VOjotd2Via2l0LXNjcm9sbGJhcntcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvX2F0aXZpZGFkZXNfX0ZBeF9VOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXHJcXG4gICAgYmFja2dyb3VuZDogI0M1ODlFODtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvZG9fYXRpdmlkYWRlX2VtX2RpYV9jb250YWluZXJfX3k4cm54LCAudG9kb19hdGl2aWRhZGVfYXRyYXNhZGFfY29udGFpbmVyX19JOEpYNHtcXHJcXG4gICAgcGFkZGluZzogNSU7XFxyXFxuICAgIG1hcmdpbjogMyU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9fYXRpdmlkYWRlX2VtX2RpYV9jb250YWluZXJfX3k4cm54e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzU4OUU4O1xcclxcbn1cXHJcXG4udG9kb19hdGl2aWRhZGVfYXRyYXNhZGFfY29udGFpbmVyX19JOEpYNHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9fYWN0aXZpdHlfdGV4dF9fVkpyamF7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvX3VuY2hlY2tlZF9fV1VRV2l7XFxyXFxuICAgIHdpZHRoOiA1MXB4OyBcXHJcXG4gICAgaGVpZ2h0OiA1MHB4OyBcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvdW5jaGVja2VkLnBuZycpOyBcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXFxyXFxufVxcclxcblxcclxcblxcclxcbi50b2RvX2F0aXZpZGFkZXNfX0ZBeF9VIGgze1xcclxcbiAgICBmb250LXNpemU6IDI3cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmZjtcXHJcXG59XFxyXFxuLnRvZG9fYXRpdmlkYWRlc19fRkF4X1Ugc3BhbntcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBjb2xvcjogI2ZmZmY7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTcwcHgpIHtcXHJcXG4gICAgLnRvZG9faGVhZGVyX19nZmc4OHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRvZG9fdGl0dWxvX2hlYWRlcl9fNXZkX1oge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAudG9kb19saXN0YXNfX3lpSko1IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRvZG9fbGlzdGFfX2pLX1h1e1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvX2xpbmVfX0VldFRVe1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAudG9kb190aXR1bG9fbGlzdGFfX3cwdW1le1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDg0cHgpIHtcXHJcXG4gICAgLnRvZG9fdXNlcl93ZWxjb21lX19GRW1ONXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvX2V4aXRfYWNjb3VudF9fZTVtQ1J7XFxyXFxuICAgICAgICBmb250LXNpemU6IDR2dztcXHJcXG4gICAgfVxcclxcbiAgICAudG9kb19hZGRfYWN0aXZpdHlfX1gyeFBwe1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvZG9fdGl0dWxvX2hlYWRlcl9fNXZkX1p7XFxyXFxuICAgICAgICBmb250LXNpemU6IDV2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9kb19hdGl2aWRhZGVzX19GQXhfVXtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJ2dztcXHJcXG4gICAgICAgIHdpZHRoOiA1NnZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvX3VuY2hlY2tlZF9fV1VRV2l7XFxyXFxuICAgICAgICB3aWR0aDogMTN2dzsgXFxyXFxuICAgICAgICBoZWlnaHQ6IDEzdnc7IFxcclxcbiAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9kb19saXN0YXNfX3lpSko1IC50b2RvX2xpc3RhX19qS19YdSAudG9kb19hdGl2aWRhZGVzX19GQXhfVXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9kb19hY3Rpdml0eV90ZXh0X19WSnJqYSBoM3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNnZ3O1xcclxcbiAgICB9XFxyXFxuICAgIC50b2RvX2FjdGl2aXR5X3RleHRfX1ZKcmphIHNwYW57XFxyXFxuICAgICAgICBmb250LXNpemU6IDR2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9kb190aXR1bG9fbGlzdGFfX3cwdW1le1xcclxcbiAgICAgICAgZm9udC1zaXplOiA4dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xcclxcbiAgICAudG9kb191c2VyX3dlbGNvbWVfX0ZFbU41e1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwdnc7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9wYWdlcy90b2RvTGlzdC90b2RvLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsc0hBQXNIOztBQUV0SDtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxZQUFZO0FBQ2hCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0EsbUJBQW1CO0FBQ25CO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQSx3QkFBd0I7QUFDeEI7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUEscURBQXFEO0FBQ3JEO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQSw2QkFBNkI7QUFDN0I7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQSw4QkFBOEI7QUFDOUI7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQSxtQkFBbUI7QUFDbkI7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7Ozs7QUFJSjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZOztJQUVoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDcwMCZmYW1pbHk9UmFsZXdheTp3Z2h0QDEwMDszMDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QTU3NjY7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcbi8qUGFnZSBoZWFkZXIgKHRvcGJhcikqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgICBtYXJnaW46IDIwcHg7IFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLyptYXgtaGVpZ2h0OiA3NXB4OyovXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgLyptYXJnaW4tYm90dG9tOiAxMHB4OyovXFxyXFxufVxcclxcbi8qVGl0dWxvIGRhIHRvcGJhciovXFxyXFxuLnRpdHVsb19oZWFkZXIge1xcclxcbiAgICBjb2xvcjogI2UzZGFmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuLnVzZXJfd2VsY29tZXtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBjb2xvcjogI2ZmZmY7XFxyXFxufVxcclxcbi8qTmF2aWdhdGlvbiBoeXBlcmxpbmtzKi9cXHJcXG4uYWRkX2FjdGl2aXR5e1xcclxcbiAgICBjb2xvcjogI0UzREFGRjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4uZXhpdF9hY2NvdW50e1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjRTNEQUZGO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5oZWFkZXIgYTpob3ZlcntcXHJcXG4gICAgY29sb3I6I0M1ODlFODtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkaXYgY29tIGFzIDIgbGlzdGFzIGRlIHRhcmVmYSAodXJnZW50ZStib20gZmF6ZXIpKi9cXHJcXG4ubGlzdGFzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLXRvcDogODBweDsgXFxyXFxufVxcclxcblxcclxcbi8qdMOtdHVsbyBVUkdFTlRFIGUgQk9NIEZBWkVSKi9cXHJcXG4udGl0dWxvX2xpc3Rhe1xcclxcbiAgICBjb2xvcjogI2UzZGFmZjtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKmRpdiBwYXJhIGEgbGlzdGEgZGUgdXJnZW50ZSovXFxyXFxuLmxpc3RhIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLypMaW5oYSBkZSBkaXZpc8OjbyovXFxyXFxuLmxpbmV7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI0VDRkZGODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXRpdmlkYWRlc3tcXHJcXG4gICAgcGFkZGluZzogMjNweDtcXHJcXG4gICAgLypoZWlnaHQ6IDU1MHB4OyovXFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXRpdmlkYWRlczo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXRpdmlkYWRlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNDNTg5RTg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hdGl2aWRhZGVfZW1fZGlhX2NvbnRhaW5lciwgLmF0aXZpZGFkZV9hdHJhc2FkYV9jb250YWluZXJ7XFxyXFxuICAgIHBhZGRpbmc6IDUlO1xcclxcbiAgICBtYXJnaW46IDMlO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hdGl2aWRhZGVfZW1fZGlhX2NvbnRhaW5lcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1ODlFODtcXHJcXG59XFxyXFxuLmF0aXZpZGFkZV9hdHJhc2FkYV9jb250YWluZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMTAwMDA7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpdml0eV90ZXh0e1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4udW5jaGVja2Vke1xcclxcbiAgICB3aWR0aDogNTFweDsgXFxyXFxuICAgIGhlaWdodDogNTBweDsgXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3VuY2hlY2tlZC5wbmcnKTsgXFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYXRpdmlkYWRlcyBoM3tcXHJcXG4gICAgZm9udC1zaXplOiAyN3B4O1xcclxcbiAgICBjb2xvcjogI2ZmZmY7XFxyXFxufVxcclxcbi5hdGl2aWRhZGVzIHNwYW57XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgY29sb3I6ICNmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk3MHB4KSB7XFxyXFxuICAgIC5oZWFkZXJ7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuICAgIC50aXR1bG9faGVhZGVyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLmxpc3RhcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB9XFxyXFxuICAgIC5saXN0YXtcXHJcXG4gICAgICAgIGhlaWdodDogNDB2aDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGluZXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gICAgICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRpdHVsb19saXN0YXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgIFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4NHB4KSB7XFxyXFxuICAgIC51c2VyX3dlbGNvbWV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDN2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZXhpdF9hY2NvdW50e1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFkZF9hY3Rpdml0eXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXR1bG9faGVhZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmF0aXZpZGFkZXN7XFxyXFxuICAgICAgICBwYWRkaW5nOiAydnc7XFxyXFxuICAgICAgICB3aWR0aDogNTZ2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudW5jaGVja2Vke1xcclxcbiAgICAgICAgd2lkdGg6IDEzdnc7IFxcclxcbiAgICAgICAgaGVpZ2h0OiAxM3Z3OyBcXHJcXG4gICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxpc3RhcyAubGlzdGEgLmF0aXZpZGFkZXN7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFjdGl2aXR5X3RleHQgaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6IDZ2dztcXHJcXG4gICAgfVxcclxcbiAgICAuYWN0aXZpdHlfdGV4dCBzcGFue1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRpdHVsb19saXN0YXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogOHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcXHJcXG4gICAgLnVzZXJfd2VsY29tZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMHZ3O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInRvZG9fY29udGFpbmVyX190S2RBWFwiLFxuXHRcImhlYWRlclwiOiBcInRvZG9faGVhZGVyX19nZmc4OFwiLFxuXHRcInRpdHVsb19oZWFkZXJcIjogXCJ0b2RvX3RpdHVsb19oZWFkZXJfXzV2ZF9aXCIsXG5cdFwidXNlcl93ZWxjb21lXCI6IFwidG9kb191c2VyX3dlbGNvbWVfX0ZFbU41XCIsXG5cdFwiYWRkX2FjdGl2aXR5XCI6IFwidG9kb19hZGRfYWN0aXZpdHlfX1gyeFBwXCIsXG5cdFwiZXhpdF9hY2NvdW50XCI6IFwidG9kb19leGl0X2FjY291bnRfX2U1bUNSXCIsXG5cdFwibGlzdGFzXCI6IFwidG9kb19saXN0YXNfX3lpSko1XCIsXG5cdFwidGl0dWxvX2xpc3RhXCI6IFwidG9kb190aXR1bG9fbGlzdGFfX3cwdW1lXCIsXG5cdFwibGlzdGFcIjogXCJ0b2RvX2xpc3RhX19qS19YdVwiLFxuXHRcImxpbmVcIjogXCJ0b2RvX2xpbmVfX0VldFRVXCIsXG5cdFwiYXRpdmlkYWRlc1wiOiBcInRvZG9fYXRpdmlkYWRlc19fRkF4X1VcIixcblx0XCJhdGl2aWRhZGVfZW1fZGlhX2NvbnRhaW5lclwiOiBcInRvZG9fYXRpdmlkYWRlX2VtX2RpYV9jb250YWluZXJfX3k4cm54XCIsXG5cdFwiYXRpdmlkYWRlX2F0cmFzYWRhX2NvbnRhaW5lclwiOiBcInRvZG9fYXRpdmlkYWRlX2F0cmFzYWRhX2NvbnRhaW5lcl9fSThKWDRcIixcblx0XCJhY3Rpdml0eV90ZXh0XCI6IFwidG9kb19hY3Rpdml0eV90ZXh0X19WSnJqYVwiLFxuXHRcInVuY2hlY2tlZFwiOiBcInRvZG9fdW5jaGVja2VkX19XVVFXaVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./src/pages/todoList/todo.module.css\n"));

/***/ })

});