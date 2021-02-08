$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("reservationFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Правене на резервация за филм",
  "description": "",
  "id": "правене-на-резервация-за-филм",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Правене на резервация за филм не по-късно от 60 минути преди прожекцията и за свободно място в залата",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-не-по-късно-от-60-минути-преди-прожекцията-и-за-свободно-място-в-залата",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 17:28\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Избира името на филма \"Железният човек\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Избира датата и часа на прожекцията \"06-02-2021 18:30\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Избира броя на билетите \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Избира местата \"14\", \"15\" за зала \"B\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение \"Успешно направихте резервация\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 17:28",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 96039700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Железният човек",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 80600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:30",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 198000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 557600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 16
    },
    {
      "val": "15",
      "offset": 22
    },
    {
      "val": "B",
      "offset": 35
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String,String)"
});
formatter.result({
  "duration": 182300,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 47187400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно направихте резервация",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 2635900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Правене на резервация за филм не по-късно от 60 минути преди прожекцията и за заето място в залата",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-не-по-късно-от-60-минути-преди-прожекцията-и-за-заето-място-в-залата",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 17:28\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Избира името на филма \"Железният човек\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Избира датата и часа на прожекцията \"06-02-2021 18:30\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Избира броя на билетите \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Избира местата \"11\", \"12\" за зала \"B\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Вижда съобщение \"Избраните места са заети\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 17:28",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 338900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Железният човек",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:30",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 321700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 72700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 16
    },
    {
      "val": "12",
      "offset": 22
    },
    {
      "val": "B",
      "offset": 35
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String,String)"
});
formatter.result({
  "duration": 122700,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 214000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Избраните места са заети",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 120000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Правене на резервация за филм по-късно от 60 минути преди прожекцията и за свобосно място в залата",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-по-късно-от-60-минути-преди-прожекцията-и-за-свобосно-място-в-залата",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 18:00\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Избира името на филма \"Железният човек\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Избира датата и часа на прожекцията \"06-02-2021 18:30\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Избира броя на билетите \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Избира местата \"14\", \"15\" за зала \"B\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Вижда съобщение \"Неуспешна резервация. Не можете да направите резервация по-късно от 60 минути преди филма\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:00",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 543000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Железният човек",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 69100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:30",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 347300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 178100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 16
    },
    {
      "val": "15",
      "offset": 22
    },
    {
      "val": "B",
      "offset": 35
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String,String)"
});
formatter.result({
  "duration": 99600,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 326600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неуспешна резервация. Не можете да направите резервация по-късно от 60 минути преди филма",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Правене на резервация за филм по-късно от 60 минути преди прожекцията и за заето място в залата",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-по-късно-от-60-минути-преди-прожекцията-и-за-заето-място-в-залата",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 18:00\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Избира името на филма \"Железният човек\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Избира датата и часа на прожекцията \"06-02-2021 18:30\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Избира броя на билетите \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Избира местата \"11\", \"12\" за зала \"B\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Вижда съобщение \"Неуспешна резервация. Не можете да направите резервация по-късно от 60 минути преди филма. Избраните места са заети\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:00",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 276700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Железният човек",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 75300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:30",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 263600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 72500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 16
    },
    {
      "val": "12",
      "offset": 22
    },
    {
      "val": "B",
      "offset": 35
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String,String)"
});
formatter.result({
  "duration": 127900,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 604500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неуспешна резервация. Не можете да направите резервация по-късно от 60 минути преди филма. Избраните места са заети",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 53900,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Правене на резервация за филм без избрани места",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-без-избрани-места",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 17:28\"",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Избира името на филма \"Железният човек\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Избира датата и часа на прожекцията \"06-02-2021 18:30\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Избира броя на билетите \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Избира местата \"\", \"\" за зала \"B\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Вижда съобщение \"Неуспешна резервация. Моля изберете място в залата\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 17:28",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 486100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Железният човек",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 43900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:30",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 275700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 96900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    },
    {
      "val": "",
      "offset": 20
    },
    {
      "val": "B",
      "offset": 31
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String,String)"
});
formatter.result({
  "duration": 137200,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неуспешна резервация. Моля изберете място в залата",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 138900,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Правене на резервация за филм без да е избран броя на билетите",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-без-да-е-избран-броя-на-билетите",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 17:28\"",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "Избира името на филма \"Железният човек\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Избира датата и часа на прожекцията \"06-02-2021 18:30\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Избира броя на билетите \"0\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Избира местата \"14\", \"15\" за зала \"B\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Вижда съобщение \"Неуспешна резервация. Моля изберете броя на билетите\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 17:28",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 389200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Железният човек",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 88900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:30",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 217900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 61900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 16
    },
    {
      "val": "15",
      "offset": 22
    },
    {
      "val": "B",
      "offset": 35
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String,String)"
});
formatter.result({
  "duration": 65300,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 38100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неуспешна резервация. Моля изберете броя на билетите",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 76300,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Правене на резервация за филм без да е избрана дата и час на прожекция",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-без-да-е-избрана-дата-и-час-на-прожекция",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 17:28\"",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "Избира името на филма \"Железният човек\"",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "Избира датата и часа на прожекцията \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Избира броя на билетите \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Избира местата \"14\", \"15\" за зала \"B\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Вижда съобщение \"Неуспешна резервация. Моля изберете датата и час на прожекция\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 17:28",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 745800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Железният човек",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 64100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 93700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 135500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 16
    },
    {
      "val": "15",
      "offset": 22
    },
    {
      "val": "B",
      "offset": 35
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String,String)"
});
formatter.result({
  "duration": 89800,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 36500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неуспешна резервация. Моля изберете датата и час на прожекция",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 55600,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Правене на резервация за филм без да е избрано името на филма",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-без-да-е-избрано-името-на-филма",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 17:28\"",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Избира името на филма \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "Избира датата и часа на прожекцията \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Избира броя на билетите \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Избира местата \"14\", \"15\" за зала \"B\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Вижда съобщение \"Неуспешна резервация. Моля изберете филм\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 17:28",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 471400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 78000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 87100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 72200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 16
    },
    {
      "val": "15",
      "offset": 22
    },
    {
      "val": "B",
      "offset": 35
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String,String)"
});
formatter.result({
  "duration": 60100,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 23800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неуспешна резервация. Моля изберете филм",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 72300,
  "status": "passed"
});
});