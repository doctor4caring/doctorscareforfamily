    var fm_currentDate = new Date();
    var FormCurrency_30 = '$';
    var FormPaypalTax_30 = '0';
    var check_submit30 = 0;
    var check_before_submit30 = {};
    var required_fields30 = ["23","30","28","24","29","46","48","50","52","10","54","56","15","42","43","44","45","39","55","58","40","41","59","60","61","62","63"];
    var labels_and_ids30 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","46":"type_radio","47":"type_text","48":"type_radio","49":"type_text","50":"type_radio","52":"type_text","10":"type_radio","53":"type_radio","54":"type_text","56":"type_textarea","15":"type_radio","42":"type_radio","43":"type_radio","44":"type_radio","45":"type_radio","16":"type_radio","33":"type_text","39":"type_text","55":"type_radio","57":"type_text","58":"type_text","40":"type_checkbox","41":"type_checkbox","59":"type_checkbox","60":"type_checkbox","61":"type_checkbox","62":"type_checkbox","63":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all30 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max30 = [];
    var file_upload_check30 = [];
    var spinner_check30 = [];
    var scrollbox_trigger_point30 = '20';
    var header_image_animation30 = 'none';
    var scrollbox_loading_delay30 = '0';
    var scrollbox_auto_hide30 = '1';
    var inputIds30 = '[]';
        var update_first_field_id30 = 0;
    var form_view_count30 = 0;
    // Occurs before the form is loaded
function before_load30() {	
}	
// Occurs just before submitting  the form
function before_submit30() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset30() {	
}
// Occurs after form is submitted and reloaded
function after_submit30() {
  
}    function onload_js30() {    }

    function condition_js30() {    }

    function check_js30(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js30() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other30\" value=\"no\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other_num30\" value=\"0\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other30\" value=\"no\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other_num30\" value=\"0\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other30\" value=\"no\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other_num30\" value=\"0\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other30\" value=\"no\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num30\" value=\"0\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other30\" value=\"no\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other_num30\" value=\"0\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other30\" value=\"no\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num30\" value=\"0\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_42_allow_other30\" value=\"no\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_42_allow_other_num30\" value=\"0\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_43_allow_other30\" value=\"no\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_43_allow_other_num30\" value=\"0\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_44_allow_other30\" value=\"no\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_44_allow_other_num30\" value=\"0\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_45_allow_other30\" value=\"no\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_45_allow_other_num30\" value=\"0\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other30\" value=\"no\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other_num30\" value=\"0\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other30\" value=\"no\" />").appendTo("#form30");
  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other_num30\" value=\"0\" />").appendTo("#form30");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other30\" value=\"no\" />").appendTo("#form30");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num30\" value=\"0\" />").appendTo("#form30");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other30\" value=\"no\" />").appendTo("#form30");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num30\" value=\"0\" />").appendTo("#form30");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other30\" value=\"no\" />").appendTo("#form30");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other_num30\" value=\"0\" />").appendTo("#form30");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other30\" value=\"no\" />").appendTo("#form30");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other_num30\" value=\"0\" />").appendTo("#form30");
				  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other30\" value=\"no\" />").appendTo("#form30");
				  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other_num30\" value=\"0\" />").appendTo("#form30");
				  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other30\" value=\"no\" />").appendTo("#form30");
				  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other_num30\" value=\"0\" />").appendTo("#form30");
				  jQuery("<input type=\"hidden\" name=\"wdform_63_allow_other30\" value=\"no\" />").appendTo("#form30");
				  jQuery("<input type=\"hidden\" name=\"wdform_63_allow_other_num30\" value=\"0\" />").appendTo("#form30");
    var disabled_fields = "";
    jQuery("#form30 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields30\" value =\""+disabled_fields+"\" />").appendTo("#form30");
    };    }

    function unset_fields30( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields30(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity30( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 30,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form30 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form30 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form30 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready30() {
      if (jQuery('#form30 .wdform_section').length > 0) {
        fm_document_ready( 30 );
      }
      else {
        jQuery("#form30").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form30 .wdform_section').length > 0) {
        formOnload(30);
      }
      var ajaxObj30 = {};
      var value_ids30 = {};
      jQuery.each( jQuery.parseJSON( inputIds30 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form30 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form30 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form30 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form30 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids30[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids30[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form30 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids30[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj30.inputs = value_ids30;
          jQuery(document).on('change', '#form30 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids30[key + '|' + input_id] = id;
          jQuery.each( value_ids30, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids30).length;
              value_ids30 = unset_fields30( value_ids30, changing_field_id, count );
            }
          });
          ajaxObj30.inputs = value_ids30;
          ajax_similarity30( ajaxObj30, changing_field_id );
          });
        });
      });
      if ( update_first_field_id30 && !jQuery.isEmptyObject(ajaxObj30.inputs) ) {
        ajax_similarity30( ajaxObj30, update_first_field_id30 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready30();
    });
        