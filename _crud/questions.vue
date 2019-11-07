<template></template>
<script>
  
  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qtrivia.questions',
          permission: 'itrivia.questions',
          create: {
            title: this.$tr('qtrivia.layout.newQuestion'),
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
            requestParams: {
              filter: {triviaId:this.$route.params.id}
            }
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
            triviaId: {
              label: this.$tr('qtrivia.layout.singleTrivia'),
              value: this.$route.params.id,
              type: 'select',
              clearable: false,
              isRequired: true,
              loadOptions: {
                apiRoute: 'apiRoutes.qtrivia.trivias',
                select: {label: 'title', id: 'id'},
                requestParams: {filter: {triviaId : this.$route.params.id}}
              }
            } 
          }
        }
      }
    },
  }
</script>
