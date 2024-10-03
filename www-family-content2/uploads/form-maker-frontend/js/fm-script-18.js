    var fm_currentDate = new Date();
    var FormCurrency_18 = '$';
    var FormPaypalTax_18 = '0';
    var check_submit18 = 0;
    var check_before_submit18 = {};
    var required_fields18 = ["23","30","28","24","29","48","50","53","55","57","42","10","44","45","11","12","13","46","47","39","58","60","40","41","61","62","63","64","65"];
    var labels_and_ids18 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","48":"type_radio","49":"type_text","50":"type_radio","52":"type_text","53":"type_radio","55":"type_text","56":"type_radio","57":"type_text","42":"type_own_select","43":"type_text","10":"type_radio","31":"type_text","44":"type_own_select","45":"type_own_select","11":"type_radio","36":"type_text","12":"type_radio","37":"type_text","13":"type_radio","46":"type_own_select","38":"type_text","47":"type_text","39":"type_text","58":"type_radio","59":"type_text","60":"type_text","40":"type_checkbox","41":"type_checkbox","61":"type_checkbox","62":"type_checkbox","63":"type_checkbox","64":"type_checkbox","65":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all18 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max18 = [];
    var file_upload_check18 = [];
    var spinner_check18 = [];
    var scrollbox_trigger_point18 = '20';
    var header_image_animation18 = 'none';
    var scrollbox_loading_delay18 = '0';
    var scrollbox_auto_hide18 = '1';
    var inputIds18 = '[]';
        var update_first_field_id18 = 0;
    var form_view_count18 = 0;
    // Occurs before the form is loaded
function before_load18() {	
}	
// Occurs just before submitting  the form
function before_submit18() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset18() {	
}
// Occurs after form is submitted and reloaded
function after_submit18() {
  
}    function onload_js18() {    }

    function condition_js18() {    }

    function check_js18(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js18() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other18\" value=\"no\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other_num18\" value=\"0\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other18\" value=\"no\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other_num18\" value=\"0\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other18\" value=\"no\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other_num18\" value=\"0\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other18\" value=\"no\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other_num18\" value=\"0\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other18\" value=\"no\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num18\" value=\"0\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other18\" value=\"no\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other_num18\" value=\"0\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other18\" value=\"no\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other_num18\" value=\"0\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other18\" value=\"no\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other_num18\" value=\"0\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other18\" value=\"no\" />").appendTo("#form18");
  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other_num18\" value=\"0\" />").appendTo("#form18");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other18\" value=\"no\" />").appendTo("#form18");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num18\" value=\"0\" />").appendTo("#form18");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other18\" value=\"no\" />").appendTo("#form18");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num18\" value=\"0\" />").appendTo("#form18");
				  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other18\" value=\"no\" />").appendTo("#form18");
				  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other_num18\" value=\"0\" />").appendTo("#form18");
				  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other18\" value=\"no\" />").appendTo("#form18");
				  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other_num18\" value=\"0\" />").appendTo("#form18");
				  jQuery("<input type=\"hidden\" name=\"wdform_63_allow_other18\" value=\"no\" />").appendTo("#form18");
				  jQuery("<input type=\"hidden\" name=\"wdform_63_allow_other_num18\" value=\"0\" />").appendTo("#form18");
				  jQuery("<input type=\"hidden\" name=\"wdform_64_allow_other18\" value=\"no\" />").appendTo("#form18");
				  jQuery("<input type=\"hidden\" name=\"wdform_64_allow_other_num18\" value=\"0\" />").appendTo("#form18");
				  jQuery("<input type=\"hidden\" name=\"wdform_65_allow_other18\" value=\"no\" />").appendTo("#form18");
				  jQuery("<input type=\"hidden\" name=\"wdform_65_allow_other_num18\" value=\"0\" />").appendTo("#form18");
    var disabled_fields = "";
    jQuery("#form18 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields18\" value =\""+disabled_fields+"\" />").appendTo("#form18");
    };    }

    function unset_fields18( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields18(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity18( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 18,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form18 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form18 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form18 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready18() {
      if (jQuery('#form18 .wdform_section').length > 0) {
        fm_document_ready( 18 );
      }
      else {
        jQuery("#form18").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form18 .wdform_section').length > 0) {
        formOnload(18);
      }
      var ajaxObj18 = {};
      var value_ids18 = {};
      jQuery.each( jQuery.parseJSON( inputIds18 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form18 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form18 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form18 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form18 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids18[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids18[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form18 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids18[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj18.inputs = value_ids18;
          jQuery(document).on('change', '#form18 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids18[key + '|' + input_id] = id;
          jQuery.each( value_ids18, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids18).length;
              value_ids18 = unset_fields18( value_ids18, changing_field_id, count );
            }
          });
          ajaxObj18.inputs = value_ids18;
          ajax_similarity18( ajaxObj18, changing_field_id );
          });
        });
      });
      if ( update_first_field_id18 && !jQuery.isEmptyObject(ajaxObj18.inputs) ) {
        ajax_similarity18( ajaxObj18, update_first_field_id18 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready18();
    });
        