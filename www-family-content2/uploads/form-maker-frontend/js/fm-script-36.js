    var fm_currentDate = new Date();
    var FormCurrency_36 = '$';
    var FormPaypalTax_36 = '0';
    var check_submit36 = 0;
    var check_before_submit36 = {};
    var required_fields36 = ["23","30","28","24","29","10","15","16","46","11","12","39","40","41"];
    var labels_and_ids36 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","10":"type_radio","42":"type_own_select","43":"type_text","44":"type_own_select","32":"type_text","15":"type_radio","33":"type_text","16":"type_radio","35":"type_text","46":"type_own_select","36":"type_text","11":"type_radio","37":"type_text","12":"type_radio","38":"type_text","39":"type_text","40":"type_checkbox","41":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all36 = [];
    var check_paypal_price_min_max36 = [];
    var file_upload_check36 = [];
    var spinner_check36 = [];
    var scrollbox_trigger_point36 = '20';
    var header_image_animation36 = 'none';
    var scrollbox_loading_delay36 = '0';
    var scrollbox_auto_hide36 = '1';
    var inputIds36 = '[]';
        var update_first_field_id36 = 0;
    var form_view_count36 = 0;
    // Occurs before the form is loaded
function before_load36() {	
}	
// Occurs just before submitting  the form
function before_submit36() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset36() {	
}
// Occurs after form is submitted and reloaded
function after_submit36() {
  
}    function onload_js36() {    }

    function condition_js36() {    }

    function check_js36(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js36() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other36\" value=\"no\" />").appendTo("#form36");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num36\" value=\"0\" />").appendTo("#form36");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other36\" value=\"no\" />").appendTo("#form36");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num36\" value=\"0\" />").appendTo("#form36");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other36\" value=\"no\" />").appendTo("#form36");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other_num36\" value=\"0\" />").appendTo("#form36");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other36\" value=\"no\" />").appendTo("#form36");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other_num36\" value=\"0\" />").appendTo("#form36");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other36\" value=\"no\" />").appendTo("#form36");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other_num36\" value=\"0\" />").appendTo("#form36");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other36\" value=\"no\" />").appendTo("#form36");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num36\" value=\"0\" />").appendTo("#form36");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other36\" value=\"no\" />").appendTo("#form36");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num36\" value=\"0\" />").appendTo("#form36");
    var disabled_fields = "";
    jQuery("#form36 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields36\" value =\""+disabled_fields+"\" />").appendTo("#form36");
    };    }

    function unset_fields36( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields36(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity36( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 36,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form36 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form36 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form36 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready36() {
      if (jQuery('#form36 .wdform_section').length > 0) {
        fm_document_ready( 36 );
      }
      else {
        jQuery("#form36").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form36 .wdform_section').length > 0) {
        formOnload(36);
      }
      var ajaxObj36 = {};
      var value_ids36 = {};
      jQuery.each( jQuery.parseJSON( inputIds36 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form36 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form36 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form36 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form36 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids36[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids36[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form36 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids36[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj36.inputs = value_ids36;
          jQuery(document).on('change', '#form36 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids36[key + '|' + input_id] = id;
          jQuery.each( value_ids36, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids36).length;
              value_ids36 = unset_fields36( value_ids36, changing_field_id, count );
            }
          });
          ajaxObj36.inputs = value_ids36;
          ajax_similarity36( ajaxObj36, changing_field_id );
          });
        });
      });
      if ( update_first_field_id36 && !jQuery.isEmptyObject(ajaxObj36.inputs) ) {
        ajax_similarity36( ajaxObj36, update_first_field_id36 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready36();
    });
        