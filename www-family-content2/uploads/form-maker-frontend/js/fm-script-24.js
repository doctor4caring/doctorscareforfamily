    var fm_currentDate = new Date();
    var FormCurrency_24 = '$';
    var FormPaypalTax_24 = '0';
    var check_submit24 = 0;
    var check_before_submit24 = {};
    var required_fields24 = ["23","30","28","24","29","63","65","67","69","71","34","42","44","46","48","50","11","12","13","53","55","57","59","61","39","74","40","41","75","76","77","78","79"];
    var labels_and_ids24 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","63":"type_radio","64":"type_text","65":"type_radio","66":"type_text","67":"type_radio","69":"type_text","70":"type_radio","71":"type_text","34":"type_own_select","35":"type_text","42":"type_own_select","43":"type_text","44":"type_own_select","45":"type_text","46":"type_own_select","47":"type_text","48":"type_own_select","50":"type_own_select","49":"type_text","11":"type_radio","12":"type_radio","37":"type_text","13":"type_radio","38":"type_text","53":"type_radio","54":"type_text","55":"type_radio","56":"type_text","57":"type_radio","58":"type_text","59":"type_radio","60":"type_text","61":"type_radio","62":"type_text","39":"type_text","72":"type_radio","73":"type_text","74":"type_text","40":"type_checkbox","41":"type_checkbox","75":"type_checkbox","76":"type_checkbox","77":"type_checkbox","78":"type_checkbox","79":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all24 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max24 = [];
    var file_upload_check24 = [];
    var spinner_check24 = [];
    var scrollbox_trigger_point24 = '20';
    var header_image_animation24 = 'none';
    var scrollbox_loading_delay24 = '0';
    var scrollbox_auto_hide24 = '1';
    var inputIds24 = '[]';
        var update_first_field_id24 = 0;
    var form_view_count24 = 0;
    // Occurs before the form is loaded
function before_load24() {	
}	
// Occurs just before submitting  the form
function before_submit24() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset24() {	
}
// Occurs after form is submitted and reloaded
function after_submit24() {
  
}    function onload_js24() {    }

    function condition_js24() {    }

    function check_js24(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js24() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_63_allow_other24\" value=\"no\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_63_allow_other_num24\" value=\"0\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_65_allow_other24\" value=\"no\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_65_allow_other_num24\" value=\"0\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_67_allow_other24\" value=\"no\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_67_allow_other_num24\" value=\"0\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_70_allow_other24\" value=\"no\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_70_allow_other_num24\" value=\"0\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other24\" value=\"no\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other_num24\" value=\"0\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other24\" value=\"no\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other_num24\" value=\"0\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other24\" value=\"no\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other_num24\" value=\"0\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other24\" value=\"no\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other_num24\" value=\"0\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other24\" value=\"no\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other_num24\" value=\"0\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_57_allow_other24\" value=\"no\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_57_allow_other_num24\" value=\"0\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other24\" value=\"no\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other_num24\" value=\"0\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other24\" value=\"no\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other_num24\" value=\"0\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_72_allow_other24\" value=\"no\" />").appendTo("#form24");
  jQuery("<input type=\"hidden\" name=\"wdform_72_allow_other_num24\" value=\"0\" />").appendTo("#form24");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other24\" value=\"no\" />").appendTo("#form24");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num24\" value=\"0\" />").appendTo("#form24");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other24\" value=\"no\" />").appendTo("#form24");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num24\" value=\"0\" />").appendTo("#form24");
				  jQuery("<input type=\"hidden\" name=\"wdform_75_allow_other24\" value=\"no\" />").appendTo("#form24");
				  jQuery("<input type=\"hidden\" name=\"wdform_75_allow_other_num24\" value=\"0\" />").appendTo("#form24");
				  jQuery("<input type=\"hidden\" name=\"wdform_76_allow_other24\" value=\"no\" />").appendTo("#form24");
				  jQuery("<input type=\"hidden\" name=\"wdform_76_allow_other_num24\" value=\"0\" />").appendTo("#form24");
				  jQuery("<input type=\"hidden\" name=\"wdform_77_allow_other24\" value=\"no\" />").appendTo("#form24");
				  jQuery("<input type=\"hidden\" name=\"wdform_77_allow_other_num24\" value=\"0\" />").appendTo("#form24");
				  jQuery("<input type=\"hidden\" name=\"wdform_78_allow_other24\" value=\"no\" />").appendTo("#form24");
				  jQuery("<input type=\"hidden\" name=\"wdform_78_allow_other_num24\" value=\"0\" />").appendTo("#form24");
				  jQuery("<input type=\"hidden\" name=\"wdform_79_allow_other24\" value=\"no\" />").appendTo("#form24");
				  jQuery("<input type=\"hidden\" name=\"wdform_79_allow_other_num24\" value=\"0\" />").appendTo("#form24");
    var disabled_fields = "";
    jQuery("#form24 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields24\" value =\""+disabled_fields+"\" />").appendTo("#form24");
    };    }

    function unset_fields24( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields24(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity24( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 24,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form24 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form24 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form24 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready24() {
      if (jQuery('#form24 .wdform_section').length > 0) {
        fm_document_ready( 24 );
      }
      else {
        jQuery("#form24").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form24 .wdform_section').length > 0) {
        formOnload(24);
      }
      var ajaxObj24 = {};
      var value_ids24 = {};
      jQuery.each( jQuery.parseJSON( inputIds24 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form24 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form24 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form24 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form24 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids24[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids24[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form24 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids24[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj24.inputs = value_ids24;
          jQuery(document).on('change', '#form24 [id^="wdform_'+ input_id +'_elemen"]', function() {
          var id = '';
          var changing_field_id = '';
          if( jQuery(this).attr("tagName") == 'INPUT' ) {
            if( jQuery(this).is(':checked') ) {
              id = jQuery(this).val();
            }
            if( jQuery(this).attr('type') == 'text' ) {
              id = jQuery(this).val();
            }
          }
          else {
            id = jQuery(this).val();
          }
          value_ids24[key + '|' + input_id] = id;
          jQuery.each( value_ids24, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids24).length;
              value_ids24 = unset_fields24( value_ids24, changing_field_id, count );
            }
          });
          ajaxObj24.inputs = value_ids24;
          ajax_similarity24( ajaxObj24, changing_field_id );
          });
        });
      });
      if ( update_first_field_id24 && !jQuery.isEmptyObject(ajaxObj24.inputs) ) {
        ajax_similarity24( ajaxObj24, update_first_field_id24 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready24();
    });
        