//Layout container
import master from 'src/layouts/master'

//Middleware
import auth from '@imagina/quser/_router/middlewares/auth'
import access from '@imagina/quser/_router/middlewares/access'

export default {
  trivias: {
    permission: 'itrivia.trivias.manage',
    activated: true,
    path: '/itrivia/trivias/index',
    name: 'qtrivia.admin.trivias.index',
    layout: require('@imagina/qtrivia/_layouts/admin/trivias/index').default,
    containerLayout: master,
    title: 'qtrivia.sidebar.adminTrivias',
    icon: 'fas fa-brain',
    middleware: [auth,access]
  },
  questions: {
    permission: 'itrivia.questions.manage',
    activated: true,
    path: '/itrivia/questions/index/trivia/:id',
    name: 'qtrivia.admin.questions.index',
    layout: require('@imagina/qtrivia/_layouts/admin/questions/index').default,
    containerLayout: master,
    title: 'qtrivia.sidebar.adminQuestions',
    icon: 'fas fa-question-circle',
    middleware: [auth,access]
  },
  answers: {
    permission: 'itrivia.answers.manage',
    activated: true,
    path: '/itrivia/answers/index/question/:id',
    name: 'qtrivia.admin.answers.index',
    layout: require('@imagina/qtrivia/_layouts/admin/answers/index').default,
    containerLayout: master,
    title: 'qtrivia.sidebar.adminAnswers',
    icon: 'fas fa-question-circle',
    middleware: [auth,access]
  },
  rangepoints: {
    permission: 'itrivia.rangepoints.manage',
    activated: true,
    path: '/itrivia/rangepoints/index/trivia/:id',
    name: 'qtrivia.admin.rangepoints.index',
    layout: require('@imagina/qtrivia/_layouts/admin/rangepoints/index').default,
    containerLayout: master,
    title: 'qtrivia.sidebar.adminRangepoints',
    icon: 'fas fa-award',
    middleware: [auth,access]
  },

}
