    var fm_currentDate = new Date();
    var FormCurrency_29 = '$';
    var FormPaypalTax_29 = '0';
    var check_submit29 = 0;
    var check_before_submit29 = {};
    var required_fields29 = ["23","30","28","24","29","56","58","60","62","10","64","66","45","15","47","51","54","39","69","40","41","70","71","72","73","74"];
    var labels_and_ids29 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","56":"type_radio","57":"type_text","58":"type_radio","59":"type_text","60":"type_radio","62":"type_text","10":"type_radio","63":"type_radio","64":"type_text","66":"type_radio","67":"type_text","43":"type_own_select","33":"type_text","44":"type_own_select","35":"type_text","45":"type_text","15":"type_radio","46":"type_text","47":"type_radio","48":"type_text","49":"type_own_select","50":"type_text","51":"type_radio","53":"type_text","54":"type_radio","55":"type_text","39":"type_text","65":"type_radio","68":"type_text","69":"type_text","40":"type_checkbox","41":"type_checkbox","70":"type_checkbox","71":"type_checkbox","72":"type_checkbox","73":"type_checkbox","74":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all29 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max29 = [];
    var file_upload_check29 = [];
    var spinner_check29 = [];
    var scrollbox_trigger_point29 = '20';
    var header_image_animation29 = 'none';
    var scrollbox_loading_delay29 = '0';
    var scrollbox_auto_hide29 = '1';
    var inputIds29 = '[]';
        var update_first_field_id29 = 0;
    var form_view_count29 = 0;
    // Occurs before the form is loaded
function before_load29() {	
}	
// Occurs just before submitting  the form
function before_submit29() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset29() {	
}
// Occurs after form is submitted and reloaded
function after_submit29() {
  
}    function onload_js29() {    }

    function condition_js29() {    }

    function check_js29(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js29() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other29\" value=\"no\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other_num29\" value=\"0\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other29\" value=\"no\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other_num29\" value=\"0\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other29\" value=\"no\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other_num29\" value=\"0\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other29\" value=\"no\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num29\" value=\"0\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_63_allow_other29\" value=\"no\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_63_allow_other_num29\" value=\"0\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_66_allow_other29\" value=\"no\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_66_allow_other_num29\" value=\"0\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other29\" value=\"no\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num29\" value=\"0\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_47_allow_other29\" value=\"no\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_47_allow_other_num29\" value=\"0\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_51_allow_other29\" value=\"no\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_51_allow_other_num29\" value=\"0\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_54_allow_other29\" value=\"no\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_54_allow_other_num29\" value=\"0\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_65_allow_other29\" value=\"no\" />").appendTo("#form29");
  jQuery("<input type=\"hidden\" name=\"wdform_65_allow_other_num29\" value=\"0\" />").appendTo("#form29");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other29\" value=\"no\" />").appendTo("#form29");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num29\" value=\"0\" />").appendTo("#form29");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other29\" value=\"no\" />").appendTo("#form29");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num29\" value=\"0\" />").appendTo("#form29");
				  jQuery("<input type=\"hidden\" name=\"wdform_70_allow_other29\" value=\"no\" />").appendTo("#form29");
				  jQuery("<input type=\"hidden\" name=\"wdform_70_allow_other_num29\" value=\"0\" />").appendTo("#form29");
				  jQuery("<input type=\"hidden\" name=\"wdform_71_allow_other29\" value=\"no\" />").appendTo("#form29");
				  jQuery("<input type=\"hidden\" name=\"wdform_71_allow_other_num29\" value=\"0\" />").appendTo("#form29");
				  jQuery("<input type=\"hidden\" name=\"wdform_72_allow_other29\" value=\"no\" />").appendTo("#form29");
				  jQuery("<input type=\"hidden\" name=\"wdform_72_allow_other_num29\" value=\"0\" />").appendTo("#form29");
				  jQuery("<input type=\"hidden\" name=\"wdform_73_allow_other29\" value=\"no\" />").appendTo("#form29");
				  jQuery("<input type=\"hidden\" name=\"wdform_73_allow_other_num29\" value=\"0\" />").appendTo("#form29");
				  jQuery("<input type=\"hidden\" name=\"wdform_74_allow_other29\" value=\"no\" />").appendTo("#form29");
				  jQuery("<input type=\"hidden\" name=\"wdform_74_allow_other_num29\" value=\"0\" />").appendTo("#form29");
    var disabled_fields = "";
    jQuery("#form29 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields29\" value =\""+disabled_fields+"\" />").appendTo("#form29");
    };    }

    function unset_fields29( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields29(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity29( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 29,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form29 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form29 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form29 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready29() {
      if (jQuery('#form29 .wdform_section').length > 0) {
        fm_document_ready( 29 );
      }
      else {
        jQuery("#form29").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form29 .wdform_section').length > 0) {
        formOnload(29);
      }
      var ajaxObj29 = {};
      var value_ids29 = {};
      jQuery.each( jQuery.parseJSON( inputIds29 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form29 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form29 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form29 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form29 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids29[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids29[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form29 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids29[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj29.inputs = value_ids29;
          jQuery(document).on('change', '#form29 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids29[key + '|' + input_id] = id;
          jQuery.each( value_ids29, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids29).length;
              value_ids29 = unset_fields29( value_ids29, changing_field_id, count );
            }
          });
          ajaxObj29.inputs = value_ids29;
          ajax_similarity29( ajaxObj29, changing_field_id );
          });
        });
      });
      if ( update_first_field_id29 && !jQuery.isEmptyObject(ajaxObj29.inputs) ) {
        ajax_similarity29( ajaxObj29, update_first_field_id29 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready29();
    });
        