    var fm_currentDate = new Date();
    var FormCurrency_8 = '$';
    var FormPaypalTax_8 = '0';
    var check_submit8 = 0;
    var check_before_submit8 = {};
    var required_fields8 = ["23","28","27","24","26","10","25","15","16","17","18","11","12","13","19","21","30","32"];
    var labels_and_ids8 = {"23":"type_text","28":"type_date_fields","27":"type_text","24":"type_submitter_mail","26":"type_text","10":"type_radio","25":"type_radio","14":"type_text","15":"type_radio","16":"type_radio","17":"type_radio","18":"type_radio","11":"type_radio","12":"type_radio","13":"type_radio","19":"type_radio","21":"type_radio","29":"type_text","30":"type_checkbox","32":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all8 = [];
    var check_paypal_price_min_max8 = [];
    var file_upload_check8 = [];
    var spinner_check8 = [];
    var scrollbox_trigger_point8 = '20';
    var header_image_animation8 = 'none';
    var scrollbox_loading_delay8 = '0';
    var scrollbox_auto_hide8 = '1';
    var inputIds8 = '[]';
        var update_first_field_id8 = 0;
    var form_view_count8 = 0;
    // Occurs before the form is loaded
function before_load8() {	
}	
// Occurs just before submitting  the form
function before_submit8() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset8() {	
}
// Occurs after form is submitted and reloaded
function after_submit8() {
  
}    function onload_js8() {    }

    function condition_js8() {    }

    function check_js8(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js8() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other8\" value=\"no\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num8\" value=\"0\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_25_allow_other8\" value=\"no\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_25_allow_other_num8\" value=\"0\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other8\" value=\"no\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num8\" value=\"0\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other8\" value=\"no\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other_num8\" value=\"0\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_17_allow_other8\" value=\"no\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_17_allow_other_num8\" value=\"0\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_18_allow_other8\" value=\"no\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_18_allow_other_num8\" value=\"0\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other8\" value=\"no\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other_num8\" value=\"0\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other8\" value=\"no\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other_num8\" value=\"0\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other8\" value=\"no\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other_num8\" value=\"0\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_19_allow_other8\" value=\"no\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_19_allow_other_num8\" value=\"0\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_21_allow_other8\" value=\"no\" />").appendTo("#form8");
  jQuery("<input type=\"hidden\" name=\"wdform_21_allow_other_num8\" value=\"0\" />").appendTo("#form8");
				  jQuery("<input type=\"hidden\" name=\"wdform_30_allow_other8\" value=\"no\" />").appendTo("#form8");
				  jQuery("<input type=\"hidden\" name=\"wdform_30_allow_other_num8\" value=\"0\" />").appendTo("#form8");
				  jQuery("<input type=\"hidden\" name=\"wdform_32_allow_other8\" value=\"no\" />").appendTo("#form8");
				  jQuery("<input type=\"hidden\" name=\"wdform_32_allow_other_num8\" value=\"0\" />").appendTo("#form8");
    var disabled_fields = "";
    jQuery("#form8 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields8\" value =\""+disabled_fields+"\" />").appendTo("#form8");
    };    }

    function unset_fields8( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields8(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity8( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 8,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form8 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form8 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form8 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready8() {
      if (jQuery('#form8 .wdform_section').length > 0) {
        fm_document_ready( 8 );
      }
      else {
        jQuery("#form8").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form8 .wdform_section').length > 0) {
        formOnload(8);
      }
      var ajaxObj8 = {};
      var value_ids8 = {};
      jQuery.each( jQuery.parseJSON( inputIds8 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form8 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form8 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form8 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form8 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids8[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids8[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form8 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids8[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj8.inputs = value_ids8;
          jQuery(document).on('change', '#form8 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids8[key + '|' + input_id] = id;
          jQuery.each( value_ids8, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids8).length;
              value_ids8 = unset_fields8( value_ids8, changing_field_id, count );
            }
          });
          ajaxObj8.inputs = value_ids8;
          ajax_similarity8( ajaxObj8, changing_field_id );
          });
        });
      });
      if ( update_first_field_id8 && !jQuery.isEmptyObject(ajaxObj8.inputs) ) {
        ajax_similarity8( ajaxObj8, update_first_field_id8 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready8();
    });
        