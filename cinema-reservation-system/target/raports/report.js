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
  "duration": 84995500,
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
  "duration": 65300,
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
  "duration": 238300,
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
  "duration": 823300,
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
  "duration": 88600,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 46794200,
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
  "duration": 1624900,
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
  "duration": 329400,
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
  "duration": 80100,
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
  "duration": 215300,
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
  "duration": 59000,
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
  "duration": 55800,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 210000,
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
  "duration": 102800,
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
  "duration": 358000,
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
  "duration": 67700,
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
  "duration": 203100,
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
  "duration": 48900,
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
  "duration": 92300,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 213100,
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
  "duration": 44300,
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
  "duration": 289900,
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
  "duration": 54300,
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
  "duration": 209400,
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
  "duration": 48100,
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
  "duration": 69000,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 236400,
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
  "duration": 32600,
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
  "duration": 273700,
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
  "duration": 55400,
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
  "duration": 215700,
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
  "duration": 100400,
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
  "duration": 102000,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 18900,
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
  "duration": 49400,
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
  "duration": 243900,
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
  "duration": 34700,
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
  "duration": 280300,
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
  "duration": 63800,
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
  "duration": 113900,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 22200,
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
  "duration": 59000,
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
  "duration": 328400,
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
  "duration": 44500,
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
  "duration": 49900,
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
  "duration": 55200,
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
  "duration": 74300,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 17300,
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
  "duration": 34900,
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
  "duration": 364600,
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
  "duration": 50900,
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
  "duration": 34300,
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
  "duration": 57600,
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
  "duration": 49600,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 17700,
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
  "duration": 98600,
  "status": "passed"
});
});