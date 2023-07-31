import { Queries } from '@/models/api'

const MOCK_QUERIES: Queries = [
  {
    id: 37912,
    user: { id: 68961, name: 'Angela Smith' },
    question: 'Area prevent left past.',
    nl_response: 'Together fly put dream treatment better heavy.',
    sql_query: 'Hospital exist such community film.',
    question_date: '2023-04-14T18:04:48',
    last_updated: '2023-04-30T09:24:59',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 58607,
    user: { id: 8775, name: 'Gary Scott' },
    question: 'Situation occur possible home.',
    nl_response: 'Event then pass score outside forget some heavy.',
    sql_query: 'Guy stuff join kind.',
    question_date: '2023-02-05T18:34:48',
    last_updated: '2023-06-24T23:19:35',
    status: 'NOT_VERIFIED',
    evaluation: { confidence_level: 54, uncertainty_level: 46 },
  },
  {
    id: 67952,
    user: { id: 99639, name: 'Dawn Atkins' },
    question: 'Laugh trade yourself evening away local rather theory.',
    nl_response: 'Central page knowledge just us let when respond argue.',
    sql_query: 'Reason serious name actually.',
    question_date: '2023-05-06T09:06:05',
    last_updated: '2023-04-24T12:15:54',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 54, uncertainty_level: 46 },
  },
  {
    id: 73518,
    user: { id: 59538, name: 'Michelle Washington' },
    question: 'Piece into join outside lose human theory cover.',
    nl_response: 'Argue response place fine movement day perform.',
    sql_query: 'From cost open.',
    question_date: '2023-04-02T03:51:45',
    last_updated: '2023-05-11T23:15:16',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 75, uncertainty_level: 25 },
  },
  {
    id: 9920,
    user: { id: 10538, name: 'Robin Young' },
    question: 'Military agent allow coach defense these ground.',
    nl_response: 'Campaign science answer her great cause few federal spend.',
    sql_query: 'Purpose sure property.',
    question_date: '2023-02-21T12:43:06',
    last_updated: '2023-01-25T10:32:29',
    status: 'NOT_VERIFIED',
    evaluation: { confidence_level: 74, uncertainty_level: 26 },
  },
  {
    id: 48619,
    user: { id: 60565, name: 'Chad Roberts' },
    question: 'Enter than feel recent range think.',
    nl_response: 'Key break plan though small.',
    sql_query: 'Fact help prevent likely provide article.',
    question_date: '2023-03-30T09:05:02',
    last_updated: '2023-03-28T18:49:42',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 15994,
    user: { id: 1661, name: 'Patrick Harding' },
    question: 'Certainly rock positive religious agree reason situation and.',
    nl_response: 'Image national morning worry eight.',
    sql_query: 'Sell performance item item factor.',
    question_date: '2023-02-09T18:32:31',
    last_updated: '2023-05-06T17:03:42',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 89, uncertainty_level: 11 },
  },
  {
    id: 81378,
    user: { id: 45176, name: 'Alex Romero' },
    question: 'Blue Mrs significant where if how important so.',
    nl_response: 'By record capital others house catch.',
    sql_query: 'Way car program let understand fill.',
    question_date: '2023-05-20T14:42:26',
    last_updated: '2023-06-01T07:15:45',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 54921,
    user: { id: 84876, name: 'David Collier DDS' },
    question: 'Piece region night worry myself.',
    nl_response: 'Fight seem actually tree class low all.',
    sql_query: 'West until body together collection watch.',
    question_date: '2023-07-25T12:16:48',
    last_updated: '2023-07-02T10:52:50',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 29550,
    user: { id: 63015, name: 'Ann Humphrey' },
    question: 'Through attorney each may.',
    nl_response: 'Turn six nice produce shake reduce.',
    sql_query: 'Left technology accept.',
    question_date: '2023-02-09T20:00:55',
    last_updated: '2023-05-22T21:43:50',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 85181,
    user: { id: 64851, name: 'Kelly Ramsey' },
    question: 'Budget five international reason.',
    nl_response: 'Increase religious owner walk down hospital describe dark.',
    sql_query: 'Study officer behind probably certain coach.',
    question_date: '2023-07-08T20:48:42',
    last_updated: '2023-02-13T18:42:06',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 75633,
    user: { id: 4158, name: 'Jack Anderson' },
    question: 'Onto seven although human cause person near police.',
    nl_response: 'Give appear quality professional.',
    sql_query: 'Tax old table adult lose.',
    question_date: '2023-01-10T07:07:01',
    last_updated: '2023-01-13T19:40:18',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 96, uncertainty_level: 4 },
  },
  {
    id: 70149,
    user: { id: 55727, name: 'Carlos Davidson' },
    question: 'Just even prepare daughter challenge prove authority health.',
    nl_response: 'Feeling fill image fire time court whom.',
    sql_query: 'Owner energy mission style single.',
    question_date: '2023-07-09T13:00:54',
    last_updated: '2023-02-22T19:48:18',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 51, uncertainty_level: 49 },
  },
  {
    id: 10709,
    user: { id: 91438, name: 'Clarence Garcia' },
    question: 'Police us sort choice class reduce science.',
    nl_response: 'Garden example yourself growth again indicate house late.',
    sql_query: 'Or mission painting hear.',
    question_date: '2023-06-17T16:12:33',
    last_updated: '2023-01-28T07:02:45',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 25193,
    user: { id: 53780, name: 'Cynthia James' },
    question: 'Difference final it attention recent cost off need race.',
    nl_response: 'Under response daughter fly account million.',
    sql_query: 'Budget yeah sea when power daughter.',
    question_date: '2023-06-26T11:21:00',
    last_updated: '2023-04-23T19:27:14',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 82, uncertainty_level: 18 },
  },
  {
    id: 82104,
    user: { id: 41370, name: 'Jeanne Anderson' },
    question: 'Care tax even pick political behavior.',
    nl_response: 'Policy leg everything now among population house.',
    sql_query: 'Take support doctor guy.',
    question_date: '2023-01-17T20:19:37',
    last_updated: '2023-01-20T21:13:02',
    status: 'NOT_VERIFIED',
    evaluation: { confidence_level: 72, uncertainty_level: 28 },
  },
  {
    id: 88134,
    user: { id: 69566, name: 'Cynthia Smith' },
    question: 'Voice skill response education sound among budget head.',
    nl_response: 'Mr yard true that maintain federal.',
    sql_query: 'Down although three official.',
    question_date: '2023-01-29T14:52:17',
    last_updated: '2023-02-26T11:50:57',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 68, uncertainty_level: 32 },
  },
  {
    id: 3911,
    user: { id: 17150, name: 'Michael Jones' },
    question: 'Call involve glass a decade add.',
    nl_response: 'Anyone upon choose well character.',
    sql_query: 'Fine economy practice reflect ask.',
    question_date: '2023-04-14T05:55:04',
    last_updated: '2023-05-06T00:32:30',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 96, uncertainty_level: 4 },
  },
  {
    id: 16238,
    user: { id: 52602, name: 'Nathan Moore' },
    question:
      'Student high painting forget tonight reason position institution.',
    nl_response: 'Positive tend hit window hour much reach protect anyone.',
    sql_query: 'Without young message in show involve.',
    question_date: '2023-02-12T16:35:57',
    last_updated: '2023-01-25T04:06:56',
    status: 'NOT_VERIFIED',
    evaluation: { confidence_level: 98, uncertainty_level: 2 },
  },
  {
    id: 63385,
    user: { id: 17791, name: 'Thomas Coleman' },
    question: 'Response any determine small both main fall hit.',
    nl_response: 'Election Mr take trip hour what.',
    sql_query: 'Many avoid glass though often physical.',
    question_date: '2023-05-07T16:14:09',
    last_updated: '2023-05-03T02:25:06',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 98, uncertainty_level: 2 },
  },
  {
    id: 37912,
    user: { id: 68961, name: 'Angela Smith' },
    question: 'Area prevent left past.',
    nl_response: 'Together fly put dream treatment better heavy.',
    sql_query: 'Hospital exist such community film.',
    question_date: '2023-04-14T18:04:48',
    last_updated: '2023-04-30T09:24:59',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 58607,
    user: { id: 8775, name: 'Gary Scott' },
    question: 'Situation occur possible home.',
    nl_response: 'Event then pass score outside forget some heavy.',
    sql_query: 'Guy stuff join kind.',
    question_date: '2023-02-05T18:34:48',
    last_updated: '2023-06-24T23:19:35',
    status: 'NOT_VERIFIED',
    evaluation: { confidence_level: 54, uncertainty_level: 46 },
  },
  {
    id: 67952,
    user: { id: 99639, name: 'Dawn Atkins' },
    question: 'Laugh trade yourself evening away local rather theory.',
    nl_response: 'Central page knowledge just us let when respond argue.',
    sql_query: 'Reason serious name actually.',
    question_date: '2023-05-06T09:06:05',
    last_updated: '2023-04-24T12:15:54',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 54, uncertainty_level: 46 },
  },
  {
    id: 73518,
    user: { id: 59538, name: 'Michelle Washington' },
    question: 'Piece into join outside lose human theory cover.',
    nl_response: 'Argue response place fine movement day perform.',
    sql_query: 'From cost open.',
    question_date: '2023-04-02T03:51:45',
    last_updated: '2023-05-11T23:15:16',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 75, uncertainty_level: 25 },
  },
  {
    id: 9920,
    user: { id: 10538, name: 'Robin Young' },
    question: 'Military agent allow coach defense these ground.',
    nl_response: 'Campaign science answer her great cause few federal spend.',
    sql_query: 'Purpose sure property.',
    question_date: '2023-02-21T12:43:06',
    last_updated: '2023-01-25T10:32:29',
    status: 'NOT_VERIFIED',
    evaluation: { confidence_level: 74, uncertainty_level: 26 },
  },
  {
    id: 48619,
    user: { id: 60565, name: 'Chad Roberts' },
    question: 'Enter than feel recent range think.',
    nl_response: 'Key break plan though small.',
    sql_query: 'Fact help prevent likely provide article.',
    question_date: '2023-03-30T09:05:02',
    last_updated: '2023-03-28T18:49:42',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 15994,
    user: { id: 1661, name: 'Patrick Harding' },
    question: 'Certainly rock positive religious agree reason situation and.',
    nl_response: 'Image national morning worry eight.',
    sql_query: 'Sell performance item item factor.',
    question_date: '2023-02-09T18:32:31',
    last_updated: '2023-05-06T17:03:42',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 89, uncertainty_level: 11 },
  },
  {
    id: 81378,
    user: { id: 45176, name: 'Alex Romero' },
    question: 'Blue Mrs significant where if how important so.',
    nl_response: 'By record capital others house catch.',
    sql_query: 'Way car program let understand fill.',
    question_date: '2023-05-20T14:42:26',
    last_updated: '2023-06-01T07:15:45',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 54921,
    user: { id: 84876, name: 'David Collier DDS' },
    question: 'Piece region night worry myself.',
    nl_response: 'Fight seem actually tree class low all.',
    sql_query: 'West until body together collection watch.',
    question_date: '2023-07-25T12:16:48',
    last_updated: '2023-07-02T10:52:50',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 29550,
    user: { id: 63015, name: 'Ann Humphrey' },
    question: 'Through attorney each may.',
    nl_response: 'Turn six nice produce shake reduce.',
    sql_query: 'Left technology accept.',
    question_date: '2023-02-09T20:00:55',
    last_updated: '2023-05-22T21:43:50',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 85181,
    user: { id: 64851, name: 'Kelly Ramsey' },
    question: 'Budget five international reason.',
    nl_response: 'Increase religious owner walk down hospital describe dark.',
    sql_query: 'Study officer behind probably certain coach.',
    question_date: '2023-07-08T20:48:42',
    last_updated: '2023-02-13T18:42:06',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 75633,
    user: { id: 4158, name: 'Jack Anderson' },
    question: 'Onto seven although human cause person near police.',
    nl_response: 'Give appear quality professional.',
    sql_query: 'Tax old table adult lose.',
    question_date: '2023-01-10T07:07:01',
    last_updated: '2023-01-13T19:40:18',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 96, uncertainty_level: 4 },
  },
  {
    id: 70149,
    user: { id: 55727, name: 'Carlos Davidson' },
    question: 'Just even prepare daughter challenge prove authority health.',
    nl_response: 'Feeling fill image fire time court whom.',
    sql_query: 'Owner energy mission style single.',
    question_date: '2023-07-09T13:00:54',
    last_updated: '2023-02-22T19:48:18',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 51, uncertainty_level: 49 },
  },
  {
    id: 10709,
    user: { id: 91438, name: 'Clarence Garcia' },
    question: 'Police us sort choice class reduce science.',
    nl_response: 'Garden example yourself growth again indicate house late.',
    sql_query: 'Or mission painting hear.',
    question_date: '2023-06-17T16:12:33',
    last_updated: '2023-01-28T07:02:45',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 25193,
    user: { id: 53780, name: 'Cynthia James' },
    question: 'Difference final it attention recent cost off need race.',
    nl_response: 'Under response daughter fly account million.',
    sql_query: 'Budget yeah sea when power daughter.',
    question_date: '2023-06-26T11:21:00',
    last_updated: '2023-04-23T19:27:14',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 82, uncertainty_level: 18 },
  },
  {
    id: 82104,
    user: { id: 41370, name: 'Jeanne Anderson' },
    question: 'Care tax even pick political behavior.',
    nl_response: 'Policy leg everything now among population house.',
    sql_query: 'Take support doctor guy.',
    question_date: '2023-01-17T20:19:37',
    last_updated: '2023-01-20T21:13:02',
    status: 'NOT_VERIFIED',
    evaluation: { confidence_level: 72, uncertainty_level: 28 },
  },
  {
    id: 88134,
    user: { id: 69566, name: 'Cynthia Smith' },
    question: 'Voice skill response education sound among budget head.',
    nl_response: 'Mr yard true that maintain federal.',
    sql_query: 'Down although three official.',
    question_date: '2023-01-29T14:52:17',
    last_updated: '2023-02-26T11:50:57',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 68, uncertainty_level: 32 },
  },
  {
    id: 3911,
    user: { id: 17150, name: 'Michael Jones' },
    question: 'Call involve glass a decade add.',
    nl_response: 'Anyone upon choose well character.',
    sql_query: 'Fine economy practice reflect ask.',
    question_date: '2023-04-14T05:55:04',
    last_updated: '2023-05-06T00:32:30',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 96, uncertainty_level: 4 },
  },
  {
    id: 16238,
    user: { id: 52602, name: 'Nathan Moore' },
    question:
      'Student high painting forget tonight reason position institution.',
    nl_response: 'Positive tend hit window hour much reach protect anyone.',
    sql_query: 'Without young message in show involve.',
    question_date: '2023-02-12T16:35:57',
    last_updated: '2023-01-25T04:06:56',
    status: 'NOT_VERIFIED',
    evaluation: { confidence_level: 98, uncertainty_level: 2 },
  },
  {
    id: 63385,
    user: { id: 17791, name: 'Thomas Coleman' },
    question: 'Response any determine small both main fall hit.',
    nl_response: 'Election Mr take trip hour what.',
    sql_query: 'Many avoid glass though often physical.',
    question_date: '2023-05-07T16:14:09',
    last_updated: '2023-05-03T02:25:06',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 98, uncertainty_level: 2 },
  },
  {
    id: 37912,
    user: { id: 68961, name: 'Angela Smith' },
    question: 'Area prevent left past.',
    nl_response: 'Together fly put dream treatment better heavy.',
    sql_query: 'Hospital exist such community film.',
    question_date: '2023-04-14T18:04:48',
    last_updated: '2023-04-30T09:24:59',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 58607,
    user: { id: 8775, name: 'Gary Scott' },
    question: 'Situation occur possible home.',
    nl_response: 'Event then pass score outside forget some heavy.',
    sql_query: 'Guy stuff join kind.',
    question_date: '2023-02-05T18:34:48',
    last_updated: '2023-06-24T23:19:35',
    status: 'NOT_VERIFIED',
    evaluation: { confidence_level: 54, uncertainty_level: 46 },
  },
  {
    id: 67952,
    user: { id: 99639, name: 'Dawn Atkins' },
    question: 'Laugh trade yourself evening away local rather theory.',
    nl_response: 'Central page knowledge just us let when respond argue.',
    sql_query: 'Reason serious name actually.',
    question_date: '2023-05-06T09:06:05',
    last_updated: '2023-04-24T12:15:54',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 54, uncertainty_level: 46 },
  },
  {
    id: 73518,
    user: { id: 59538, name: 'Michelle Washington' },
    question: 'Piece into join outside lose human theory cover.',
    nl_response: 'Argue response place fine movement day perform.',
    sql_query: 'From cost open.',
    question_date: '2023-04-02T03:51:45',
    last_updated: '2023-05-11T23:15:16',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 75, uncertainty_level: 25 },
  },
  {
    id: 9920,
    user: { id: 10538, name: 'Robin Young' },
    question: 'Military agent allow coach defense these ground.',
    nl_response: 'Campaign science answer her great cause few federal spend.',
    sql_query: 'Purpose sure property.',
    question_date: '2023-02-21T12:43:06',
    last_updated: '2023-01-25T10:32:29',
    status: 'NOT_VERIFIED',
    evaluation: { confidence_level: 74, uncertainty_level: 26 },
  },
  {
    id: 48619,
    user: { id: 60565, name: 'Chad Roberts' },
    question: 'Enter than feel recent range think.',
    nl_response: 'Key break plan though small.',
    sql_query: 'Fact help prevent likely provide article.',
    question_date: '2023-03-30T09:05:02',
    last_updated: '2023-03-28T18:49:42',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 15994,
    user: { id: 1661, name: 'Patrick Harding' },
    question: 'Certainly rock positive religious agree reason situation and.',
    nl_response: 'Image national morning worry eight.',
    sql_query: 'Sell performance item item factor.',
    question_date: '2023-02-09T18:32:31',
    last_updated: '2023-05-06T17:03:42',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 89, uncertainty_level: 11 },
  },
  {
    id: 81378,
    user: { id: 45176, name: 'Alex Romero' },
    question: 'Blue Mrs significant where if how important so.',
    nl_response: 'By record capital others house catch.',
    sql_query: 'Way car program let understand fill.',
    question_date: '2023-05-20T14:42:26',
    last_updated: '2023-06-01T07:15:45',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 54921,
    user: { id: 84876, name: 'David Collier DDS' },
    question: 'Piece region night worry myself.',
    nl_response: 'Fight seem actually tree class low all.',
    sql_query: 'West until body together collection watch.',
    question_date: '2023-07-25T12:16:48',
    last_updated: '2023-07-02T10:52:50',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 29550,
    user: { id: 63015, name: 'Ann Humphrey' },
    question: 'Through attorney each may.',
    nl_response: 'Turn six nice produce shake reduce.',
    sql_query: 'Left technology accept.',
    question_date: '2023-02-09T20:00:55',
    last_updated: '2023-05-22T21:43:50',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 85181,
    user: { id: 64851, name: 'Kelly Ramsey' },
    question: 'Budget five international reason.',
    nl_response: 'Increase religious owner walk down hospital describe dark.',
    sql_query: 'Study officer behind probably certain coach.',
    question_date: '2023-07-08T20:48:42',
    last_updated: '2023-02-13T18:42:06',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 75633,
    user: { id: 4158, name: 'Jack Anderson' },
    question: 'Onto seven although human cause person near police.',
    nl_response: 'Give appear quality professional.',
    sql_query: 'Tax old table adult lose.',
    question_date: '2023-01-10T07:07:01',
    last_updated: '2023-01-13T19:40:18',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 96, uncertainty_level: 4 },
  },
  {
    id: 70149,
    user: { id: 55727, name: 'Carlos Davidson' },
    question: 'Just even prepare daughter challenge prove authority health.',
    nl_response: 'Feeling fill image fire time court whom.',
    sql_query: 'Owner energy mission style single.',
    question_date: '2023-07-09T13:00:54',
    last_updated: '2023-02-22T19:48:18',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 51, uncertainty_level: 49 },
  },
  {
    id: 10709,
    user: { id: 91438, name: 'Clarence Garcia' },
    question: 'Police us sort choice class reduce science.',
    nl_response: 'Garden example yourself growth again indicate house late.',
    sql_query: 'Or mission painting hear.',
    question_date: '2023-06-17T16:12:33',
    last_updated: '2023-01-28T07:02:45',
    status: 'VERIFIED',
    evaluation: { confidence_level: 100, uncertainty_level: 0 },
  },
  {
    id: 25193,
    user: { id: 53780, name: 'Cynthia James' },
    question: 'Difference final it attention recent cost off need race.',
    nl_response: 'Under response daughter fly account million.',
    sql_query: 'Budget yeah sea when power daughter.',
    question_date: '2023-06-26T11:21:00',
    last_updated: '2023-04-23T19:27:14',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 82, uncertainty_level: 18 },
  },
  {
    id: 82104,
    user: { id: 41370, name: 'Jeanne Anderson' },
    question: 'Care tax even pick political behavior.',
    nl_response: 'Policy leg everything now among population house.',
    sql_query: 'Take support doctor guy.',
    question_date: '2023-01-17T20:19:37',
    last_updated: '2023-01-20T21:13:02',
    status: 'NOT_VERIFIED',
    evaluation: { confidence_level: 72, uncertainty_level: 28 },
  },
  {
    id: 88134,
    user: { id: 69566, name: 'Cynthia Smith' },
    question: 'Voice skill response education sound among budget head.',
    nl_response: 'Mr yard true that maintain federal.',
    sql_query: 'Down although three official.',
    question_date: '2023-01-29T14:52:17',
    last_updated: '2023-02-26T11:50:57',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 68, uncertainty_level: 32 },
  },
  {
    id: 3911,
    user: { id: 17150, name: 'Michael Jones' },
    question: 'Call involve glass a decade add.',
    nl_response: 'Anyone upon choose well character.',
    sql_query: 'Fine economy practice reflect ask.',
    question_date: '2023-04-14T05:55:04',
    last_updated: '2023-05-06T00:32:30',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 96, uncertainty_level: 4 },
  },
  {
    id: 16238,
    user: { id: 52602, name: 'Nathan Moore' },
    question:
      'Student high painting forget tonight reason position institution.',
    nl_response: 'Positive tend hit window hour much reach protect anyone.',
    sql_query: 'Without young message in show involve.',
    question_date: '2023-02-12T16:35:57',
    last_updated: '2023-01-25T04:06:56',
    status: 'NOT_VERIFIED',
    evaluation: { confidence_level: 98, uncertainty_level: 2 },
  },
  {
    id: 63385,
    user: { id: 17791, name: 'Thomas Coleman' },
    question: 'Response any determine small both main fall hit.',
    nl_response: 'Election Mr take trip hour what.',
    sql_query: 'Many avoid glass though often physical.',
    question_date: '2023-05-07T16:14:09',
    last_updated: '2023-05-03T02:25:06',
    status: 'SQL_ERROR',
    evaluation: { confidence_level: 98, uncertainty_level: 2 },
  },
]

export default MOCK_QUERIES
