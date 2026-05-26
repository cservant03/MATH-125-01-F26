var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus   Instructor Information     Instructor  Christopher Servant    Pronouns  he\/him    Phone Number   (989) 964-4894     Email   cservant@svsu.edu     Office  SW 340    Student Hours     Monday  TBD    Tuesday  TBD    Wednesday  TBD    Thursday  TBD         Note: Please do not contact your instructor via Canvas. Only use his email or phone above.   Note: If you need a more private appoinment to discuss grades or another personal matter, additional student hours can be made to meet in my office or via ZOOM.    Course Information     Course Dates  August 31, 2026 - December 19, 2026    Meeting Times  M, W: 2:30 PM - 4:20 PM    Location  Brown Hall 107    Credits  4    Meeting Times  M, W: 2:30 PM - 4:20 PM    Prerequisites  All Math Basic Skills or equivalent must be completed prior to taking this course. This is done by passing MATH 082 or MATH 072 with a C or higher.       Course Description  A liberal arts course providing an introduction to logical inference, statistics, probability, management science, social choice, concepts of size and shape, algorithmic processes and consumer mathematics. Emphasis on understanding rather than computational expertise.   "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction Activity",
  "body": " Introduction Activity    This is the introduction to the activity.      This is the first exercise.    "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
},
{
  "id": "handout-template",
  "level": "1",
  "url": "handout-template.html",
  "type": "Worksheet",
  "number": "",
  "title": "Handout Title",
  "body": " Handout Title    A first paragtretraph with some space for notes below it.    "
},
{
  "id": "handout-template-2",
  "level": "2",
  "url": "handout-template.html#handout-template-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  A first paragtretraph with some space for notes below it.   "
},
{
  "id": "homework-2",
  "level": "1",
  "url": "homework-2.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 01",
  "body": " Homework 01    Instructions: Complete all the exercises below and submit your work by the due date.      This is the first homework exercise.     "
},
{
  "id": "homework-2-3-1",
  "level": "2",
  "url": "homework-2.html#homework-2-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first homework exercise.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
