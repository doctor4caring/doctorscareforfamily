    var fm_currentDate = new Date();
    var FormCurrency_32 = '$';
    var FormPaypalTax_32 = '0';
    var check_submit32 = 0;
    var check_before_submit32 = {};
    var required_fields32 = ["23","30","28","24","29","45","10","48","51","15","53","16","63","55","34","44","39","54","57","40","41","58","59","60","61","62"];
    var labels_and_ids32 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","45":"type_radio","46":"type_text","10":"type_radio","47":"type_text","48":"type_radio","51":"type_text","15":"type_radio","52":"type_radio","53":"type_text","16":"type_radio","63":"type_text","55":"type_text","34":"type_own_select","35":"type_text","44":"type_radio","39":"type_text","54":"type_radio","56":"type_text","57":"type_text","40":"type_checkbox","41":"type_checkbox","58":"type_checkbox","59":"type_checkbox","60":"type_checkbox","61":"type_checkbox","62":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all32 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max32 = [];
    var file_upload_check32 = [];
    var spinner_check32 = [];
    var scrollbox_trigger_point32 = '20';
    var header_image_animation32 = 'none';
    var scrollbox_loading_delay32 = '0';
    var scrollbox_auto_hide32 = '1';
    var inputIds32 = '[]';
        var update_first_field_id32 = 0;
    var form_view_count32 = 0;
    // Occurs before the form is loaded
function before_load32() {	
}	
// Occurs just before submitting  the form
function before_submit32() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset32() {	
}
// Occurs after form is submitted and reloaded
function after_submit32() {
  
}    function onload_js32() {    }

    function condition_js32() {    }

    function check_js32(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js32() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_45_allow_other32\" value=\"no\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_45_allow_other_num32\" value=\"0\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other32\" value=\"no\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num32\" value=\"0\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other32\" value=\"no\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other_num32\" value=\"0\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other32\" value=\"no\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num32\" value=\"0\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_52_allow_other32\" value=\"no\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_52_allow_other_num32\" value=\"0\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other32\" value=\"no\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other_num32\" value=\"0\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_44_allow_other32\" value=\"no\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_44_allow_other_num32\" value=\"0\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_54_allow_other32\" value=\"no\" />").appendTo("#form32");
  jQuery("<input type=\"hidden\" name=\"wdform_54_allow_other_num32\" value=\"0\" />").appendTo("#form32");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other32\" value=\"no\" />").appendTo("#form32");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num32\" value=\"0\" />").appendTo("#form32");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other32\" value=\"no\" />").appendTo("#form32");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num32\" value=\"0\" />").appendTo("#form32");
				  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other32\" value=\"no\" />").appendTo("#form32");
				  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other_num32\" value=\"0\" />").appendTo("#form32");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other32\" value=\"no\" />").appendTo("#form32");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other_num32\" value=\"0\" />").appendTo("#form32");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other32\" value=\"no\" />").appendTo("#form32");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other_num32\" value=\"0\" />").appendTo("#form32");
				  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other32\" value=\"no\" />").appendTo("#form32");
				  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other_num32\" value=\"0\" />").appendTo("#form32");
				  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other32\" value=\"no\" />").appendTo("#form32");
				  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other_num32\" value=\"0\" />").appendTo("#form32");
    var disabled_fields = "";
    jQuery("#form32 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields32\" value =\""+disabled_fields+"\" />").appendTo("#form32");
    };    }

    function unset_fields32( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields32(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity32( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 32,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form32 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form32 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form32 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready32() {
      if (jQuery('#form32 .wdform_section').length > 0) {
        fm_document_ready( 32 );
      }
      else {
        jQuery("#form32").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form32 .wdform_section').length > 0) {
        formOnload(32);
      }
      var ajaxObj32 = {};
      var value_ids32 = {};
      jQuery.each( jQuery.parseJSON( inputIds32 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form32 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form32 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form32 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form32 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids32[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids32[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form32 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids32[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj32.inputs = value_ids32;
          jQuery(document).on('change', '#form32 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids32[key + '|' + input_id] = id;
          jQuery.each( value_ids32, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids32).length;
              value_ids32 = unset_fields32( value_ids32, changing_field_id, count );
            }
          });
          ajaxObj32.inputs = value_ids32;
          ajax_similarity32( ajaxObj32, changing_field_id );
          });
        });
      });
      if ( update_first_field_id32 && !jQuery.isEmptyObject(ajaxObj32.inputs) ) {
        ajax_similarity32( ajaxObj32, update_first_field_id32 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready32();
    });
        