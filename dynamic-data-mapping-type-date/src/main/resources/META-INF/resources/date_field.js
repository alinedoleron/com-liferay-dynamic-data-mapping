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

					_focusOut: function(event) {
						var instance = this;

						instance.hideError();
					},

					_formatDate: function(formattedDate, regex) {
						var instance = this;

						formattedDate = formattedDate.replace(regex, '$3-$1-$2');
						instance.setValue(formattedDate);
					},

					_loadMaskPlaceholder: function(input) {
						var instance = this;

						var container = instance.get('container');
						var dateFormatLang = instance.get('mask');
						var dateRegex = /(\d{2})(\d{2})(\d{4})/;
						var formattedDate;

						switch (dateFormatLang) {
						case '%d/%m/%Y':
							formattedDate = input.replace(dateRegex, '$3-$2-$1');
							container.one('.form-control').setAttribute('placeholder', 'dd/mm/yyyy');
							break;
						case '%Y/%m/%d':
							formattedDate = input.replace(dateRegex, '$1-$2-$3');
							container.one('.form-control').setAttribute('placeholder', 'yyyy/mm/dd');
							break;
						case '%m/%d/%Y':
							formattedDate = input.replace(dateRegex, '$3-$1-$2');
							container.one('.form-control').setAttribute('placeholder', 'mm/dd/yyyy');
							break;
						}

						return formattedDate;
					},

					_onActiveInputChange: function(event) {
						var instance = this;
						
						var triggerNode = instance.getTriggerNode();

						if (event.newVal === triggerNode) {
							datePicker.set('mask', instance.get('mask'));
						}

						instance._loadMaskPlaceholder('');
					},

					_onClickCalendar: function() {
						var instance = this;

						instance.getTriggerNode().focus();

						datePicker.show();
					},

					_onStringType: function(event) {
						var instance = this;

						var input = event.target._node.value;
						var formattedDate;
						var popover = datePicker.getPopover();

						popover.set('visible', false);

						formattedDate = instance._loadMaskPlaceholder(input);
						instance._validateFieldDate(input, formattedDate);
					},

					_validateFieldDate: function(input, formattedDate) {
						var instance = this;

						var anySymbolRegex = /[-!$%^&*()_+|~=`{}\[\]:\\";'<>?,.]/;
						var barRegex = /\//;
						var stringRegex = /[a-zA-Z\u00C0-\u00FF ]+/i;

						if (input == '') {
							instance.hideError();
						}
						else if (input.match(stringRegex) || input.match(anySymbolRegex)) {
							instance.setValue('');
							instance.addErrorMessage('This field does not accept letters');
						}
						else {
							instance.hideError();
							if (input.length === 8 && !input.match(barRegex)) {
								instance._formatDate(formattedDate, barRegex);
							}
						}
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