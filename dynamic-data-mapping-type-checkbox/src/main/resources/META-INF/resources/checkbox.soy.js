/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from checkbox.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DDMCheckbox.
 * @hassoydeltemplate {ddm.field.idom}
 * @public
 */

goog.module('DDMCheckbox.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s2_560e40fa(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  $render(opt_data, null, opt_ijData);
}
exports.__deltemplate_s2_560e40fa = __deltemplate_s2_560e40fa;
if (goog.DEBUG) {
  __deltemplate_s2_560e40fa.soyTemplateName = 'DDMCheckbox.__deltemplate_s2_560e40fa';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ddm.field.idom'), 'checkbox', 0, __deltemplate_s2_560e40fa);


/**
 * @param {{
 *  label: (!goog.soy.data.SanitizedContent|string),
 *  name: (!goog.soy.data.SanitizedContent|string),
 *  readOnly: boolean,
 *  required: boolean,
 *  showAsSwitcher: boolean,
 *  showLabel: boolean,
 *  tip: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  visible: boolean,
 *  value: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var label = soy.asserts.assertType(goog.isString(opt_data.label) || opt_data.label instanceof goog.soy.data.SanitizedContent, 'label', opt_data.label, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var name = soy.asserts.assertType(goog.isString(opt_data.name) || opt_data.name instanceof goog.soy.data.SanitizedContent, 'name', opt_data.name, '!goog.soy.data.SanitizedContent|string');
  /** @type {boolean} */
  var readOnly = soy.asserts.assertType(goog.isBoolean(opt_data.readOnly) || opt_data.readOnly === 1 || opt_data.readOnly === 0, 'readOnly', opt_data.readOnly, 'boolean');
  /** @type {boolean} */
  var required = soy.asserts.assertType(goog.isBoolean(opt_data.required) || opt_data.required === 1 || opt_data.required === 0, 'required', opt_data.required, 'boolean');
  /** @type {boolean} */
  var showAsSwitcher = soy.asserts.assertType(goog.isBoolean(opt_data.showAsSwitcher) || opt_data.showAsSwitcher === 1 || opt_data.showAsSwitcher === 0, 'showAsSwitcher', opt_data.showAsSwitcher, 'boolean');
  /** @type {boolean} */
  var showLabel = soy.asserts.assertType(goog.isBoolean(opt_data.showLabel) || opt_data.showLabel === 1 || opt_data.showLabel === 0, 'showLabel', opt_data.showLabel, 'boolean');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var tip = soy.asserts.assertType(opt_data.tip == null || (goog.isString(opt_data.tip) || opt_data.tip instanceof goog.soy.data.SanitizedContent), 'tip', opt_data.tip, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean} */
  var visible = soy.asserts.assertType(goog.isBoolean(opt_data.visible) || opt_data.visible === 1 || opt_data.visible === 0, 'visible', opt_data.visible, 'boolean');
  /** @type {?} */
  var value = opt_data.value;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-group' + (visible ? '' : ' hide') + ' liferay-ddm-form-field-checkbox');
      incrementalDom.attr('data-fieldname', name);
  incrementalDom.elementOpenEnd();
    if (showAsSwitcher) {
      incrementalDom.elementOpenStart('label');
          incrementalDom.attr('aria-checked', value ? 'true' : 'false');
          incrementalDom.attr('for', name);
          incrementalDom.attr('role', 'checkbox');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('input');
            incrementalDom.attr('class', 'toggle-switch');
            if (value) {
              incrementalDom.attr('checked', '');
            }
            if (readOnly) {
              incrementalDom.attr('disabled', '');
            }
            incrementalDom.attr('id', name);
            incrementalDom.attr('name', name);
            incrementalDom.attr('type', 'checkbox');
            incrementalDom.attr('value', 'true');
        incrementalDom.elementOpenEnd();
        incrementalDom.elementClose('input');
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('aria-hidden', 'true');
            incrementalDom.attr('class', 'toggle-switch-bar');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('span');
              incrementalDom.attr('class', 'toggle-switch-handle');
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('span');
        incrementalDom.elementClose('span');
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'toggle-switch-text toggle-switch-text-right');
        incrementalDom.elementOpenEnd();
          if (showLabel) {
            soyIdom.print(label);
          }
          if (required) {
            incrementalDom.elementOpenStart('span');
                incrementalDom.attr('class', 'icon-asterisk text-warning');
            incrementalDom.elementOpenEnd();
            incrementalDom.elementClose('span');
          }
        incrementalDom.elementClose('span');
      incrementalDom.elementClose('label');
      incrementalDom.elementOpenStart('p');
          incrementalDom.attr('class', 'liferay-ddm-form-field-tip');
      incrementalDom.elementOpenEnd();
        soyIdom.print(tip ? tip : '');
      incrementalDom.elementClose('p');
    } else {
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'checkbox');
      incrementalDom.elementOpenEnd();
          if (showLabel) {
            incrementalDom.elementOpenStart('label');
              incrementalDom.attr('for', name);
          incrementalDom.elementOpenEnd();
          }
          incrementalDom.elementOpenStart('input');
              if (value) {
                incrementalDom.attr('checked', '');
              }
              if (readOnly) {
                incrementalDom.attr('disabled', '');
              }
              incrementalDom.attr('id', name);
              incrementalDom.attr('name', name);
              incrementalDom.attr('type', 'checkbox');
              incrementalDom.attr('value', 'true');
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('input');
          if (showLabel) {
            incrementalDom.text(' ');
            soyIdom.print(label);
            incrementalDom.text(' ');
          }
        if (showLabel) {
          if (required) {
              incrementalDom.elementOpenStart('span');
                  incrementalDom.attr('class', 'icon-asterisk text-warning');
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('span');
            }
          incrementalDom.elementClose('label');
        }
      incrementalDom.elementClose('div');
      if (showLabel) {
        incrementalDom.elementOpenStart('p');
            incrementalDom.attr('class', 'liferay-ddm-form-field-tip');
        incrementalDom.elementOpenEnd();
          soyIdom.print(tip ? tip : '');
        incrementalDom.elementClose('p');
      }
    }
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  label: (!goog.soy.data.SanitizedContent|string),
 *  name: (!goog.soy.data.SanitizedContent|string),
 *  readOnly: boolean,
 *  required: boolean,
 *  showAsSwitcher: boolean,
 *  showLabel: boolean,
 *  tip: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  visible: boolean,
 *  value: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'DDMCheckbox.render';
}

exports.render.params = ["label","name","readOnly","required","showAsSwitcher","showLabel","tip","visible","value"];
exports.render.types = {"label":"string","name":"string","readOnly":"bool","required":"bool","showAsSwitcher":"bool","showLabel":"bool","tip":"string","visible":"bool","value":"?"};
templates = exports;
return exports;

});

class DDMCheckbox extends Component {}
Soy.register(DDMCheckbox, templates);
export { DDMCheckbox, templates };
export default templates;
/* jshint ignore:end */
