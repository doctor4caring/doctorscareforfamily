    var fm_currentDate = new Date();
    var FormCurrency_39 = '$';
    var FormPaypalTax_39 = '0';
    var check_submit39 = 0;
    var check_before_submit39 = {};
    var required_fields39 = ["23","30","28","24","29","46","48","52","53","50","10","15","16","42","34","43","11","12","51","62","39","40","41","55","56","58","60","59"];
    var labels_and_ids39 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","46":"type_radio","47":"type_text","48":"type_radio","49":"type_text","52":"type_text","53":"type_text","50":"type_radio","10":"type_radio","15":"type_radio","16":"type_radio","42":"type_radio","34":"type_own_select","43":"type_own_select","11":"type_radio","36":"type_text","12":"type_radio","51":"type_radio","37":"type_text","62":"type_text","39":"type_text","40":"type_checkbox","41":"type_checkbox","55":"type_checkbox","56":"type_checkbox","58":"type_checkbox","60":"type_checkbox","59":"type_checkbox","57":"type_submit_reset"};
    var check_regExp_all39 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max39 = [];
    var file_upload_check39 = [];
    var spinner_check39 = [];
    var scrollbox_trigger_point39 = '20';
    var header_image_animation39 = 'none';
    var scrollbox_loading_delay39 = '0';
    var scrollbox_auto_hide39 = '1';
    var inputIds39 = '[]';
        var update_first_field_id39 = 0;
    var form_view_count39 = 0;
    // Occurs before the form is loaded
function before_load39() {	
}	
// Occurs just before submitting  the form
function before_submit39() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset39() {	
}
// Occurs after form is submitted and reloaded
function after_submit39() {
  
}    function onload_js39() {    }

    function condition_js39() {    }

    function check_js39(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js39() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other39\" value=\"no\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other_num39\" value=\"0\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other39\" value=\"no\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other_num39\" value=\"0\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other39\" value=\"no\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other_num39\" value=\"0\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other39\" value=\"no\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num39\" value=\"0\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other39\" value=\"no\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num39\" value=\"0\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other39\" value=\"no\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other_num39\" value=\"0\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_42_allow_other39\" value=\"no\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_42_allow_other_num39\" value=\"0\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other39\" value=\"no\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other_num39\" value=\"0\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other39\" value=\"no\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other_num39\" value=\"0\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_51_allow_other39\" value=\"no\" />").appendTo("#form39");
  jQuery("<input type=\"hidden\" name=\"wdform_51_allow_other_num39\" value=\"0\" />").appendTo("#form39");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other39\" value=\"no\" />").appendTo("#form39");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num39\" value=\"0\" />").appendTo("#form39");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other39\" value=\"no\" />").appendTo("#form39");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num39\" value=\"0\" />").appendTo("#form39");
				  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other39\" value=\"no\" />").appendTo("#form39");
				  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other_num39\" value=\"0\" />").appendTo("#form39");
				  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other39\" value=\"no\" />").appendTo("#form39");
				  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other_num39\" value=\"0\" />").appendTo("#form39");
				  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other39\" value=\"no\" />").appendTo("#form39");
				  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other_num39\" value=\"0\" />").appendTo("#form39");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other39\" value=\"no\" />").appendTo("#form39");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other_num39\" value=\"0\" />").appendTo("#form39");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other39\" value=\"no\" />").appendTo("#form39");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other_num39\" value=\"0\" />").appendTo("#form39");
    var disabled_fields = "";
    jQuery("#form39 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields39\" value =\""+disabled_fields+"\" />").appendTo("#form39");
    };    }

    function unset_fields39( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields39(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity39( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 39,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form39 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form39 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form39 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready39() {
      if (jQuery('#form39 .wdform_section').length > 0) {
        fm_document_ready( 39 );
      }
      else {
        jQuery("#form39").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form39 .wdform_section').length > 0) {
        formOnload(39);
      }
      var ajaxObj39 = {};
      var value_ids39 = {};
      jQuery.each( jQuery.parseJSON( inputIds39 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form39 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form39 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form39 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form39 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids39[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids39[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form39 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids39[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj39.inputs = value_ids39;
          jQuery(document).on('change', '#form39 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids39[key + '|' + input_id] = id;
          jQuery.each( value_ids39, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids39).length;
              value_ids39 = unset_fields39( value_ids39, changing_field_id, count );
            }
          });
          ajaxObj39.inputs = value_ids39;
          ajax_similarity39( ajaxObj39, changing_field_id );
          });
        });
      });
      if ( update_first_field_id39 && !jQuery.isEmptyObject(ajaxObj39.inputs) ) {
        ajax_similarity39( ajaxObj39, update_first_field_id39 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready39();
    });
        