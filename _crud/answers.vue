<template></template>
<script>
  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qtrivia.answers',
          permission: 'itrivia.answers',
          create: {
            title: this.$tr('qtrivia.layout.newAnswer'),
          },
          read: {
            columns: [
              {
                name: 'title', 
                label: this.$tr('ui.form.title'), 
                field: 'title', 
                align: 'rigth'
              },
              {
                name: 'actions', 
                label: this.$tr('ui.form.actions'), 
                align: 'left'
              },
            ],
            requestParams: {}
          },
          update: {
          },
          delete: true,
          
           formLeft: {
            title: {
              label: this.$tr('ui.form.title'),
              value: '',
              type: 'text',
              rules: [
                val => !!val || this.$tr('ui.message.fieldRequired')
              ],
              isTranslatable: true,
            },
            correct: {
              label: this.$tr('qtrivia.layout.form.correct'),
              value: 0,
              type: 'select',
              options: [
                {label: this.$tr('ui.label.yes'), value: 1},
                {label: this.$tr('ui.label.no'), value: 0},
              ]
            },
          }
          
        }
      }
    },
  }
</script>
