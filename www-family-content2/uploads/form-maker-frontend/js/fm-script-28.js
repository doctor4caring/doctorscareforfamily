    var fm_currentDate = new Date();
    var FormCurrency_28 = '$';
    var FormPaypalTax_28 = '0';
    var check_submit28 = 0;
    var check_before_submit28 = {};
    var required_fields28 = ["23","30","28","24","29","46","48","50","52","10","54","15","16","42","43","44","39","55","57","40","41","58","59","60","61","62"];
    var labels_and_ids28 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","46":"type_radio","47":"type_text","48":"type_radio","49":"type_text","50":"type_radio","52":"type_text","10":"type_radio","53":"type_radio","54":"type_text","15":"type_radio","16":"type_radio","42":"type_radio","43":"type_radio","44":"type_radio","35":"type_text","45":"type_text","39":"type_text","55":"type_radio","56":"type_text","57":"type_text","40":"type_checkbox","41":"type_checkbox","58":"type_checkbox","59":"type_checkbox","60":"type_checkbox","61":"type_checkbox","62":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all28 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max28 = [];
    var file_upload_check28 = [];
    var spinner_check28 = [];
    var scrollbox_trigger_point28 = '20';
    var header_image_animation28 = 'none';
    var scrollbox_loading_delay28 = '0';
    var scrollbox_auto_hide28 = '1';
    var inputIds28 = '[]';
        var update_first_field_id28 = 0;
    var form_view_count28 = 0;
    // Occurs before the form is loaded
function before_load28() {	
}	
// Occurs just before submitting  the form
function before_submit28() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset28() {	
}
// Occurs after form is submitted and reloaded
function after_submit28() {
  
}    function onload_js28() {    }

    function condition_js28() {    }

    function check_js28(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js28() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other28\" value=\"no\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other_num28\" value=\"0\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other28\" value=\"no\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other_num28\" value=\"0\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other28\" value=\"no\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other_num28\" value=\"0\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other28\" value=\"no\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num28\" value=\"0\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other28\" value=\"no\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other_num28\" value=\"0\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other28\" value=\"no\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num28\" value=\"0\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other28\" value=\"no\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other_num28\" value=\"0\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_42_allow_other28\" value=\"no\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_42_allow_other_num28\" value=\"0\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_43_allow_other28\" value=\"no\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_43_allow_other_num28\" value=\"0\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_44_allow_other28\" value=\"no\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_44_allow_other_num28\" value=\"0\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other28\" value=\"no\" />").appendTo("#form28");
  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other_num28\" value=\"0\" />").appendTo("#form28");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other28\" value=\"no\" />").appendTo("#form28");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num28\" value=\"0\" />").appendTo("#form28");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other28\" value=\"no\" />").appendTo("#form28");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num28\" value=\"0\" />").appendTo("#form28");
				  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other28\" value=\"no\" />").appendTo("#form28");
				  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other_num28\" value=\"0\" />").appendTo("#form28");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other28\" value=\"no\" />").appendTo("#form28");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other_num28\" value=\"0\" />").appendTo("#form28");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other28\" value=\"no\" />").appendTo("#form28");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other_num28\" value=\"0\" />").appendTo("#form28");
				  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other28\" value=\"no\" />").appendTo("#form28");
				  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other_num28\" value=\"0\" />").appendTo("#form28");
				  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other28\" value=\"no\" />").appendTo("#form28");
				  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other_num28\" value=\"0\" />").appendTo("#form28");
    var disabled_fields = "";
    jQuery("#form28 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields28\" value =\""+disabled_fields+"\" />").appendTo("#form28");
    };    }

    function unset_fields28( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields28(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity28( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 28,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form28 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form28 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form28 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready28() {
      if (jQuery('#form28 .wdform_section').length > 0) {
        fm_document_ready( 28 );
      }
      else {
        jQuery("#form28").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form28 .wdform_section').length > 0) {
        formOnload(28);
      }
      var ajaxObj28 = {};
      var value_ids28 = {};
      jQuery.each( jQuery.parseJSON( inputIds28 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form28 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form28 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form28 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form28 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids28[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids28[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form28 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids28[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj28.inputs = value_ids28;
          jQuery(document).on('change', '#form28 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids28[key + '|' + input_id] = id;
          jQuery.each( value_ids28, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids28).length;
              value_ids28 = unset_fields28( value_ids28, changing_field_id, count );
            }
          });
          ajaxObj28.inputs = value_ids28;
          ajax_similarity28( ajaxObj28, changing_field_id );
          });
        });
      });
      if ( update_first_field_id28 && !jQuery.isEmptyObject(ajaxObj28.inputs) ) {
        ajax_similarity28( ajaxObj28, update_first_field_id28 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready28();
    });
        