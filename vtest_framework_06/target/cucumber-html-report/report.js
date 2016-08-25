$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("App_modules_and_tiles.feature");
formatter.feature({
  "line": 1,
  "name": "App modules and tiles",
  "description": "",
  "id": "app-modules-and-tiles",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify hover mouse pointer on module",
  "description": "",
  "id": "app-modules-and-tiles;verify-hover-mouse-pointer-on-module",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "For AM05 navigate to application \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "For AM05 user login using username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "For AM05 login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "For AM05 Hover mouse pointer on Training module",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "For AM05 Verify that on up slider, it should display training module description and should zoom module icon",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "app-modules-and-tiles;verify-hover-mouse-pointer-on-module;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password"
      ],
      "line": 11,
      "id": "app-modules-and-tiles;verify-hover-mouse-pointer-on-module;;1"
    },
    {
      "cells": [
        "https://onparagyte-a07071eeabb94b.sharepoint.com/sites/intranet/Apps/p10/",
        "vjain@paragyte.com",
        "Matrix@123"
      ],
      "line": 12,
      "id": "app-modules-and-tiles;verify-hover-mouse-pointer-on-module;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Verify hover mouse pointer on module",
  "description": "",
  "id": "app-modules-and-tiles;verify-hover-mouse-pointer-on-module;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "For AM05 navigate to application \"https://onparagyte-a07071eeabb94b.sharepoint.com/sites/intranet/Apps/p10/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "For AM05 user login using username as \"vjain@paragyte.com\" and password as \"Matrix@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "For AM05 login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "For AM05 Hover mouse pointer on Training module",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "For AM05 Verify that on up slider, it should display training module description and should zoom module icon",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://onparagyte-a07071eeabb94b.sharepoint.com/sites/intranet/Apps/p10/",
      "offset": 34
    }
  ],
  "location": "AM_05.for_AM05_navigate_to_application(String)"
});
formatter.result({
  "duration": 15877842194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vjain@paragyte.com",
      "offset": 39
    },
    {
      "val": "Matrix@123",
      "offset": 76
    }
  ],
  "location": "AM_05.for_AM05_user_login_using_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 70520016980,
  "status": "passed"
});
formatter.match({
  "location": "AM_05.for_AM05_login_should_be_successful()"
});
formatter.result({
  "duration": 240981,
  "status": "passed"
});
formatter.match({
  "location": "AM_05.for_AM05_hover_mouse_pointer_on_Training_module()"
});
formatter.result({
  "duration": 6495785921,
  "status": "passed"
});
formatter.match({
  "location": "AM_05.for_AM05_verify_that_on_up_slider_it_should_display_training_module_description_and_should_zoom_module_icon()"
});
formatter.result({
  "duration": 1122163143,
  "error_message": "java.lang.AssertionError: Images are not same expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:496)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat stepDefinition.AM_05.for_AM05_verify_that_on_up_slider_it_should_display_training_module_description_and_should_zoom_module_icon(AM_05.java:98)\r\n\tat ✽.And For AM05 Verify that on up slider, it should display training module description and should zoom module icon(App_modules_and_tiles.feature:8)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Verify remove hover mouse pointer on module",
  "description": "",
  "id": "app-modules-and-tiles;verify-remove-hover-mouse-pointer-on-module",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "For AM_06 navigate to application \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "For AM_06 user login using username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "For AM_06 login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "For AM_06 Hover mouse pointer on Training module",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "For AM_06 Remove mouse pointer from Training module",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "For AM_06 Verify that remove mouse hover should hide module slider with its description and icon should show in its previous size.",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "app-modules-and-tiles;verify-remove-hover-mouse-pointer-on-module;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password"
      ],
      "line": 23,
      "id": "app-modules-and-tiles;verify-remove-hover-mouse-pointer-on-module;;1"
    },
    {
      "cells": [
        "https://onparagyte-a07071eeabb94b.sharepoint.com/sites/intranet/Apps/p10/",
        "vjain@paragyte.com",
        "Matrix@123"
      ],
      "line": 24,
      "id": "app-modules-and-tiles;verify-remove-hover-mouse-pointer-on-module;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Verify remove hover mouse pointer on module",
  "description": "",
  "id": "app-modules-and-tiles;verify-remove-hover-mouse-pointer-on-module;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "For AM_06 navigate to application \"https://onparagyte-a07071eeabb94b.sharepoint.com/sites/intranet/Apps/p10/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "For AM_06 user login using username as \"vjain@paragyte.com\" and password as \"Matrix@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "For AM_06 login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "For AM_06 Hover mouse pointer on Training module",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "For AM_06 Remove mouse pointer from Training module",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "For AM_06 Verify that remove mouse hover should hide module slider with its description and icon should show in its previous size.",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://onparagyte-a07071eeabb94b.sharepoint.com/sites/intranet/Apps/p10/",
      "offset": 35
    }
  ],
  "location": "AM_06.for_AM_06_navigate_to_application(String)"
});
formatter.result({
  "duration": 23928141019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vjain@paragyte.com",
      "offset": 40
    },
    {
      "val": "Matrix@123",
      "offset": 77
    }
  ],
  "location": "AM_06.for_AM_06_user_login_using_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 70069119933,
  "status": "passed"
});
formatter.match({
  "location": "AM_06.for_AM_06_login_should_be_successful()"
});
formatter.result({
  "duration": 227844,
  "status": "passed"
});
formatter.match({
  "location": "AM_06.for_AM_06_hover_mouse_pointer_on_Training_module()"
});
formatter.result({
  "duration": 6089967412,
  "status": "passed"
});
formatter.match({
  "location": "AM_06.for_AM_06_remove_mouse_pointer_from_Training_module()"
});
formatter.result({
  "duration": 8236844806,
  "status": "passed"
});
formatter.match({
  "location": "AM_06.for_AM_06_verify_that_remove_mouse_hover_should_hide_module_slider_with_its_description_and_icon_should_show_in_its_previous_size()"
});
formatter.result({
  "duration": 4899376899,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Verify click inside the module border then mouse click should work properly",
  "description": "",
  "id": "app-modules-and-tiles;verify-click-inside-the-module-border-then-mouse-click-should-work-properly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "For AM_07 navigate to application \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "For AM_07 user login using username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "For AM_07 login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "For AM_07 Click on Cutomize module",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "For AM_07 Click on peopleSure",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "For AM_07 Verify that after click it should go inside of that module",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "app-modules-and-tiles;verify-click-inside-the-module-border-then-mouse-click-should-work-properly;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password"
      ],
      "line": 35,
      "id": "app-modules-and-tiles;verify-click-inside-the-module-border-then-mouse-click-should-work-properly;;1"
    },
    {
      "cells": [
        "https://onparagyte-a07071eeabb94b.sharepoint.com/sites/intranet/Apps/p10/",
        "vjain@paragyte.com",
        "Matrix@123"
      ],
      "line": 36,
      "id": "app-modules-and-tiles;verify-click-inside-the-module-border-then-mouse-click-should-work-properly;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Verify click inside the module border then mouse click should work properly",
  "description": "",
  "id": "app-modules-and-tiles;verify-click-inside-the-module-border-then-mouse-click-should-work-properly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "For AM_07 navigate to application \"https://onparagyte-a07071eeabb94b.sharepoint.com/sites/intranet/Apps/p10/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "For AM_07 user login using username as \"vjain@paragyte.com\" and password as \"Matrix@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "For AM_07 login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "For AM_07 Click on Cutomize module",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "For AM_07 Click on peopleSure",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "For AM_07 Verify that after click it should go inside of that module",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://onparagyte-a07071eeabb94b.sharepoint.com/sites/intranet/Apps/p10/",
      "offset": 35
    }
  ],
  "location": "AM_07.for_AM_07_navigate_to_application(String)"
});
formatter.result({
  "duration": 18800019459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vjain@paragyte.com",
      "offset": 40
    },
    {
      "val": "Matrix@123",
      "offset": 77
    }
  ],
  "location": "AM_07.for_AM_07_user_login_using_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 80147711178,
  "status": "passed"
});
formatter.match({
  "location": "AM_07.for_AM_07_login_should_be_successful()"
});
formatter.result({
  "duration": 209370,
  "status": "passed"
});
formatter.match({
  "location": "AM_07.for_AM_07_Click_on_Cutomize_module()"
});
formatter.result({
  "duration": 7404924376,
  "status": "passed"
});
formatter.match({
  "location": "AM_07.for_AM_07_Click_on_peopleSure()"
});
formatter.result({
  "duration": 3145924966,
  "status": "passed"
});
formatter.match({
  "location": "AM_07.for_AM_07_Verify_that_after_click_it_should_go_inside_of_that_module()"
});
formatter.result({
  "duration": 91579559,
  "status": "passed"
});
});