    var fm_currentDate = new Date();
    var FormCurrency_40 = '$';
    var FormPaypalTax_40 = '0';
    var check_submit40 = 0;
    var check_before_submit40 = {};
    var required_fields40 = ["23","30","28","24","29","46","48","50","52","53","10","56","15","42","34","44","11","12","13","39","51","57","40","41","58","59","60","61","62"];
    var labels_and_ids40 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","46":"type_radio","47":"type_text","48":"type_radio","49":"type_text","50":"type_radio","52":"type_text","53":"type_text","10":"type_radio","56":"type_radio","15":"type_radio","42":"type_radio","34":"type_own_select","35":"type_text","44":"type_own_select","36":"type_text","11":"type_radio","45":"type_text","12":"type_radio","37":"type_text","13":"type_radio","38":"type_text","39":"type_text","51":"type_radio","63":"type_text","57":"type_text","40":"type_checkbox","41":"type_checkbox","58":"type_checkbox","59":"type_checkbox","60":"type_checkbox","61":"type_checkbox","62":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all40 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max40 = [];
    var file_upload_check40 = [];
    var spinner_check40 = [];
    var scrollbox_trigger_point40 = '20';
    var header_image_animation40 = 'none';
    var scrollbox_loading_delay40 = '0';
    var scrollbox_auto_hide40 = '1';
    var inputIds40 = '[]';
        var update_first_field_id40 = 0;
    var form_view_count40 = 0;
    // Occurs before the form is loaded
function before_load40() {	
}	
// Occurs just before submitting  the form
function before_submit40() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset40() {	
}
// Occurs after form is submitted and reloaded
function after_submit40() {
  
}    function onload_js40() {    }

    function condition_js40() {    }

    function check_js40(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js40() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other40\" value=\"no\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other_num40\" value=\"0\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other40\" value=\"no\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other_num40\" value=\"0\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other40\" value=\"no\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other_num40\" value=\"0\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other40\" value=\"no\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num40\" value=\"0\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other40\" value=\"no\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other_num40\" value=\"0\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other40\" value=\"no\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num40\" value=\"0\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_42_allow_other40\" value=\"no\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_42_allow_other_num40\" value=\"0\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other40\" value=\"no\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other_num40\" value=\"0\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other40\" value=\"no\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other_num40\" value=\"0\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other40\" value=\"no\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other_num40\" value=\"0\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_51_allow_other40\" value=\"no\" />").appendTo("#form40");
  jQuery("<input type=\"hidden\" name=\"wdform_51_allow_other_num40\" value=\"0\" />").appendTo("#form40");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other40\" value=\"no\" />").appendTo("#form40");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num40\" value=\"0\" />").appendTo("#form40");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other40\" value=\"no\" />").appendTo("#form40");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num40\" value=\"0\" />").appendTo("#form40");
				  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other40\" value=\"no\" />").appendTo("#form40");
				  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other_num40\" value=\"0\" />").appendTo("#form40");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other40\" value=\"no\" />").appendTo("#form40");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other_num40\" value=\"0\" />").appendTo("#form40");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other40\" value=\"no\" />").appendTo("#form40");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other_num40\" value=\"0\" />").appendTo("#form40");
				  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other40\" value=\"no\" />").appendTo("#form40");
				  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other_num40\" value=\"0\" />").appendTo("#form40");
				  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other40\" value=\"no\" />").appendTo("#form40");
				  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other_num40\" value=\"0\" />").appendTo("#form40");
    var disabled_fields = "";
    jQuery("#form40 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields40\" value =\""+disabled_fields+"\" />").appendTo("#form40");
    };    }

    function unset_fields40( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields40(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity40( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 40,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form40 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form40 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form40 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready40() {
      if (jQuery('#form40 .wdform_section').length > 0) {
        fm_document_ready( 40 );
      }
      else {
        jQuery("#form40").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form40 .wdform_section').length > 0) {
        formOnload(40);
      }
      var ajaxObj40 = {};
      var value_ids40 = {};
      jQuery.each( jQuery.parseJSON( inputIds40 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form40 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form40 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form40 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form40 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids40[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids40[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form40 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids40[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj40.inputs = value_ids40;
          jQuery(document).on('change', '#form40 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids40[key + '|' + input_id] = id;
          jQuery.each( value_ids40, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids40).length;
              value_ids40 = unset_fields40( value_ids40, changing_field_id, count );
            }
          });
          ajaxObj40.inputs = value_ids40;
          ajax_similarity40( ajaxObj40, changing_field_id );
          });
        });
      });
      if ( update_first_field_id40 && !jQuery.isEmptyObject(ajaxObj40.inputs) ) {
        ajax_similarity40( ajaxObj40, update_first_field_id40 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready40();
    });
        