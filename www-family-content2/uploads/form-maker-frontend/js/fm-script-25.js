    var fm_currentDate = new Date();
    var FormCurrency_25 = '$';
    var FormPaypalTax_25 = '0';
    var check_submit25 = 0;
    var check_before_submit25 = {};
    var required_fields25 = ["23","30","28","24","29","10","15","16","34","11","12","13","39","40","41"];
    var labels_and_ids25 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","10":"type_radio","31":"type_text","15":"type_radio","32":"type_text","16":"type_radio","33":"type_text","34":"type_own_select","35":"type_text","11":"type_radio","36":"type_text","12":"type_radio","37":"type_text","13":"type_radio","38":"type_text","39":"type_text","40":"type_checkbox","41":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all25 = [];
    var check_paypal_price_min_max25 = [];
    var file_upload_check25 = [];
    var spinner_check25 = [];
    var scrollbox_trigger_point25 = '20';
    var header_image_animation25 = 'none';
    var scrollbox_loading_delay25 = '0';
    var scrollbox_auto_hide25 = '1';
    var inputIds25 = '[]';
        var update_first_field_id25 = 0;
    var form_view_count25 = 0;
    // Occurs before the form is loaded
function before_load25() {	
}	
// Occurs just before submitting  the form
function before_submit25() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset25() {	
}
// Occurs after form is submitted and reloaded
function after_submit25() {
  
}    function onload_js25() {    }

    function condition_js25() {    }

    function check_js25(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js25() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other25\" value=\"no\" />").appendTo("#form25");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num25\" value=\"0\" />").appendTo("#form25");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other25\" value=\"no\" />").appendTo("#form25");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num25\" value=\"0\" />").appendTo("#form25");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other25\" value=\"no\" />").appendTo("#form25");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other_num25\" value=\"0\" />").appendTo("#form25");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other25\" value=\"no\" />").appendTo("#form25");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other_num25\" value=\"0\" />").appendTo("#form25");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other25\" value=\"no\" />").appendTo("#form25");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other_num25\" value=\"0\" />").appendTo("#form25");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other25\" value=\"no\" />").appendTo("#form25");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other_num25\" value=\"0\" />").appendTo("#form25");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other25\" value=\"no\" />").appendTo("#form25");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num25\" value=\"0\" />").appendTo("#form25");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other25\" value=\"no\" />").appendTo("#form25");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num25\" value=\"0\" />").appendTo("#form25");
    var disabled_fields = "";
    jQuery("#form25 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields25\" value =\""+disabled_fields+"\" />").appendTo("#form25");
    };    }

    function unset_fields25( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields25(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity25( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 25,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form25 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form25 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form25 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready25() {
      if (jQuery('#form25 .wdform_section').length > 0) {
        fm_document_ready( 25 );
      }
      else {
        jQuery("#form25").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form25 .wdform_section').length > 0) {
        formOnload(25);
      }
      var ajaxObj25 = {};
      var value_ids25 = {};
      jQuery.each( jQuery.parseJSON( inputIds25 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form25 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form25 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form25 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form25 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids25[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids25[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form25 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids25[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj25.inputs = value_ids25;
          jQuery(document).on('change', '#form25 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids25[key + '|' + input_id] = id;
          jQuery.each( value_ids25, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids25).length;
              value_ids25 = unset_fields25( value_ids25, changing_field_id, count );
            }
          });
          ajaxObj25.inputs = value_ids25;
          ajax_similarity25( ajaxObj25, changing_field_id );
          });
        });
      });
      if ( update_first_field_id25 && !jQuery.isEmptyObject(ajaxObj25.inputs) ) {
        ajax_similarity25( ajaxObj25, update_first_field_id25 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready25();
    });
        