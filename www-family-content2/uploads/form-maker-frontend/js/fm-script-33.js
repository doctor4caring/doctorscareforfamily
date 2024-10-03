    var fm_currentDate = new Date();
    var FormCurrency_33 = '$';
    var FormPaypalTax_33 = '0';
    var check_submit33 = 0;
    var check_before_submit33 = {};
    var required_fields33 = ["23","30","28","24","29","45","10","48","50","15","16","51","42","34","43","44","39","52","54","40","41","55","56","57","59","60"];
    var labels_and_ids33 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","45":"type_radio","46":"type_text","10":"type_radio","47":"type_text","48":"type_radio","50":"type_text","15":"type_radio","16":"type_radio","51":"type_text","42":"type_radio","34":"type_own_select","43":"type_radio","36":"type_text","44":"type_radio","39":"type_text","52":"type_radio","53":"type_text","54":"type_text","40":"type_checkbox","41":"type_checkbox","55":"type_checkbox","56":"type_checkbox","57":"type_checkbox","59":"type_checkbox","60":"type_checkbox","58":"type_submit_reset"};
    var check_regExp_all33 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max33 = [];
    var file_upload_check33 = [];
    var spinner_check33 = [];
    var scrollbox_trigger_point33 = '20';
    var header_image_animation33 = 'none';
    var scrollbox_loading_delay33 = '0';
    var scrollbox_auto_hide33 = '1';
    var inputIds33 = '[]';
        var update_first_field_id33 = 0;
    var form_view_count33 = 0;
    // Occurs before the form is loaded
function before_load33() {	
}	
// Occurs just before submitting  the form
function before_submit33() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset33() {	
}
// Occurs after form is submitted and reloaded
function after_submit33() {
  
}    function onload_js33() {    }

    function condition_js33() {    }

    function check_js33(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js33() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_45_allow_other33\" value=\"no\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_45_allow_other_num33\" value=\"0\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other33\" value=\"no\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num33\" value=\"0\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other33\" value=\"no\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other_num33\" value=\"0\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other33\" value=\"no\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num33\" value=\"0\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other33\" value=\"no\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other_num33\" value=\"0\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_42_allow_other33\" value=\"no\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_42_allow_other_num33\" value=\"0\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_43_allow_other33\" value=\"no\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_43_allow_other_num33\" value=\"0\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_44_allow_other33\" value=\"no\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_44_allow_other_num33\" value=\"0\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_52_allow_other33\" value=\"no\" />").appendTo("#form33");
  jQuery("<input type=\"hidden\" name=\"wdform_52_allow_other_num33\" value=\"0\" />").appendTo("#form33");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other33\" value=\"no\" />").appendTo("#form33");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num33\" value=\"0\" />").appendTo("#form33");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other33\" value=\"no\" />").appendTo("#form33");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num33\" value=\"0\" />").appendTo("#form33");
				  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other33\" value=\"no\" />").appendTo("#form33");
				  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other_num33\" value=\"0\" />").appendTo("#form33");
				  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other33\" value=\"no\" />").appendTo("#form33");
				  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other_num33\" value=\"0\" />").appendTo("#form33");
				  jQuery("<input type=\"hidden\" name=\"wdform_57_allow_other33\" value=\"no\" />").appendTo("#form33");
				  jQuery("<input type=\"hidden\" name=\"wdform_57_allow_other_num33\" value=\"0\" />").appendTo("#form33");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other33\" value=\"no\" />").appendTo("#form33");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other_num33\" value=\"0\" />").appendTo("#form33");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other33\" value=\"no\" />").appendTo("#form33");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other_num33\" value=\"0\" />").appendTo("#form33");
    var disabled_fields = "";
    jQuery("#form33 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields33\" value =\""+disabled_fields+"\" />").appendTo("#form33");
    };    }

    function unset_fields33( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields33(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity33( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 33,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form33 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form33 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form33 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready33() {
      if (jQuery('#form33 .wdform_section').length > 0) {
        fm_document_ready( 33 );
      }
      else {
        jQuery("#form33").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form33 .wdform_section').length > 0) {
        formOnload(33);
      }
      var ajaxObj33 = {};
      var value_ids33 = {};
      jQuery.each( jQuery.parseJSON( inputIds33 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form33 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form33 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form33 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form33 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids33[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids33[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form33 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids33[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj33.inputs = value_ids33;
          jQuery(document).on('change', '#form33 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids33[key + '|' + input_id] = id;
          jQuery.each( value_ids33, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids33).length;
              value_ids33 = unset_fields33( value_ids33, changing_field_id, count );
            }
          });
          ajaxObj33.inputs = value_ids33;
          ajax_similarity33( ajaxObj33, changing_field_id );
          });
        });
      });
      if ( update_first_field_id33 && !jQuery.isEmptyObject(ajaxObj33.inputs) ) {
        ajax_similarity33( ajaxObj33, update_first_field_id33 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready33();
    });
        