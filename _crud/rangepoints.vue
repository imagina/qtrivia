<template></template>
<script>
  
  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qtrivia.rangepoints',
          permission: 'itrivia.rangepoints',
          create: {
            title: this.$tr('qtrivia.layout.newRangePoint'),
          },
          read: {
            columns: [
              {
                name: 'value', 
                label: this.$tr('qtrivia.layout.form.value'), 
                field: 'value', 
                align: 'rigth'
              },
              {
                name: 'points', 
                label: this.$tr('qtrivia.layout.form.points'), 
                field: 'points', 
                align: 'rigth'
              },
              {
                name: 'created_at', 
                label: this.$tr('ui.form.createdAt'), 
                field: 'createdAt', 
                align: 'left',
                format: val => val ? this.$trd(val) : '-',
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
            value: {
              label: this.$tr('qtrivia.layout.form.value'),
              value: 0,
              type: 'number',
              rules: [
                val => !!val || this.$tr('ui.message.fieldRequired')
              ],
              isTranslatable: false,
            },
            points: {
              label: this.$tr('qtrivia.layout.form.points'),
              value: 0,
              type: 'number',
              rules: [
                val => !!val || this.$tr('ui.message.fieldRequired')
              ],
              isTranslatable: false,
            },
            triviaId: {
              label: this.$tr('qtrivia.layout.singleTrivia'),
              value: this.$route.params.id,
              type: 'select',
              clearable: false,
              rules: [
                  val => !!val || this.$tr('ui.message.fieldRequired')
              ],
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
