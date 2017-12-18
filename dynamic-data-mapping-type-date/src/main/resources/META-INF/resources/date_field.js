AUI.add(
	'liferay-ddm-form-field-date',
	function(A) {
		var isArray = Array.isArray;

		var datePicker = new A.DatePicker(
			{
				popover: {
					zIndex: Liferay.zIndex.TOOLTIP
				},
				trigger: '.liferay-ddm-form-field-date .trigger'
			}
		);

		var DateField = A.Component.create(
			{
				ATTRS: {
					dataType: {
						value: 'string'
					},

					mask: {
						value: Liferay.AUI.getDateFormat()
					},

					predefinedValue: {
						value: ''
					},

					type: {
						value: 'date'
					}
				},

				EXTENDS: Liferay.DDM.Renderer.Field,

				NAME: 'liferay-ddm-form-field-date',

				prototype: {
					initializer: function() {
						var instance = this;

						instance._eventHandlers.push(
							datePicker.after('selectionChange', A.bind('_afterSelectionChange', instance)),
							datePicker.on('activeInputChange', A.bind('_onActiveInputChange', instance)),
							instance.bindContainerEvent('input', instance._onStringType, '.trigger'),
							instance.bindContainerEvent('focusout', instance._focusOut, '.trigger')
						);

						if (!instance.get('readOnly')) {
							instance.bindContainerEvent('click', instance._onClickCalendar, '.input-group-addon');
						}
					},

					addErrorMessage: function(msg) {
						var instance = this;

						var container = instance.get('container');

						instance.set('errorMessage', msg);
						instance.showErrorMessage(container.one('.input-group-container'));
						container.one('.form-group').addClass('has-error');
					},

					formatDate: function(isoDate) {
						var instance = this;

						var formattedDate;

						if (isoDate) {
							formattedDate = A.Date.format(
								A.Date.parse('%Y-%m-%d', isoDate),
								{
									format: instance.get('mask')
								}
							);
						}

						return formattedDate || '';
					},

					getISODate: function(date) {
						var instance = this;

						return A.Date.format(date);
					},

					getTemplateContext: function() {
						var instance = this;

						var predefinedValue = instance.get('predefinedValue');
						var value = instance.get('value');

						return A.merge(
							DateField.superclass.getTemplateContext.apply(instance, arguments),
							{
								formattedValue: instance.formatDate(value),
								predefinedValue: instance.formatDate(predefinedValue),
								value: value
							}
						);
					},

					getTriggerNode: function() {
						var instance = this;

						var container = instance.get('container');

						var triggerNode;

						if (instance.get('readOnly')) {
							triggerNode = container.one('.trigger-readonly');
						}
						else {
							triggerNode = container.one('.trigger');
						}

						return triggerNode;
					},

					hideError: function() {
						var instance = this;

						var container = instance.get('container');

						instance.hideErrorMessage();
						container.one('.form-group').removeClass('has-error');
					},

					setValue: function(isoDate) {
						var instance = this;

						DateField.superclass.setValue.apply(instance, arguments);

						var formattedDate = instance.formatDate(isoDate);

						instance.getTriggerNode().val(formattedDate);

						instance.set('value', isoDate);
					},

					_afterSelectionChange: function(event) {
						var instance = this;

						var triggerNode = instance.getTriggerNode();

						if (datePicker.get('activeInput') === triggerNode) {
							var date = event.newSelection;

							if (isArray(date) && date.length) {
								date = date[0];
							}

							instance.setValue(instance.getISODate(date));

							instance.validate();
						}
					},

					_onActiveInputChange: function(event) {
						var instance = this;

						var triggerNode = instance.getTriggerNode();

						if (event.newVal === triggerNode) {
							datePicker.set('mask', instance.get('mask'));
						}
					},

					_onClickCalendar: function() {
						var instance = this;

						instance.getTriggerNode().focus();

						datePicker.show();
					}
				}
			}
		);

		Liferay.namespace('DDM.Field').Date = DateField;
	},
	'',
	{
		requires: ['aui-datepicker', 'liferay-ddm-form-renderer-field']
	}
);