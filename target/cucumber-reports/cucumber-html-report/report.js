$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/feature1.feature");
formatter.feature({
  "name": "Methods on JSON server",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user sets base URI of JSON server",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.MyStepdefs.userPerformsGETOperationFor()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "GET operation",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user performs GET for post  number \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.MyStepdefs.userPerformsGETForPostNumber(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "author name must say \"iwannadie\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.MyStepdefs.authorNameMustSay(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Adding new post using POST Method",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user performs POST for creating post",
  "keyword": "When "
});
formatter.step({
  "name": "new \"\u003cid\u003e\",\"\u003cname\u003e\" and \"\u003cauthor\u003e\" are passed",
  "keyword": "And "
});
formatter.step({
  "name": "new post has been created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "author"
      ]
    },
    {
      "cells": [
        "15",
        "Vignesh",
        "RoaldDahl"
      ]
    },
    {
      "cells": [
        "21",
        "21 Savage",
        "YG"
      ]
    },
    {
      "cells": [
        "50",
        "no",
        "icant"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user sets base URI of JSON server",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.MyStepdefs.userPerformsGETOperationFor()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding new post using POST Method",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user performs POST for creating post",
  "keyword": "When "
});
formatter.match({
  "location": "steps.MyStepdefs.userPerformsPOSTForCreatingPost()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new \"15\",\"Vignesh\" and \"RoaldDahl\" are passed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MyStepdefs.newAndArePassed(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new post has been created",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.MyStepdefs.newPostMustBeCreated()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user sets base URI of JSON server",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.MyStepdefs.userPerformsGETOperationFor()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding new post using POST Method",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user performs POST for creating post",
  "keyword": "When "
});
formatter.match({
  "location": "steps.MyStepdefs.userPerformsPOSTForCreatingPost()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new \"21\",\"21 Savage\" and \"YG\" are passed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MyStepdefs.newAndArePassed(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new post has been created",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.MyStepdefs.newPostMustBeCreated()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user sets base URI of JSON server",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.MyStepdefs.userPerformsGETOperationFor()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding new post using POST Method",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user performs POST for creating post",
  "keyword": "When "
});
formatter.match({
  "location": "steps.MyStepdefs.userPerformsPOSTForCreatingPost()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new \"50\",\"no\" and \"icant\" are passed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MyStepdefs.newAndArePassed(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new post has been created",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.MyStepdefs.newPostMustBeCreated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Deleting a post using DELETE Method",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user performs DELETE for deleting post",
  "keyword": "When "
});
formatter.step({
  "name": "post with \"\u003cid\u003e\" must be deleted",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "15"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user sets base URI of JSON server",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.MyStepdefs.userPerformsGETOperationFor()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deleting a post using DELETE Method",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user performs DELETE for deleting post",
  "keyword": "When "
});
formatter.match({
  "location": "steps.MyStepdefs.userPerformsDELETEForDeletingPost()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post with \"15\" must be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.MyStepdefs.postWithMustBeDeleted(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});