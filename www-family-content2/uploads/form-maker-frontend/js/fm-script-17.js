    var fm_currentDate = new Date();
    var FormCurrency_17 = '$';
    var FormPaypalTax_17 = '0';
    var check_submit17 = 0;
    var check_before_submit17 = {};
    var required_fields17 = ["23","30","28","24","29","44","46","48","50","52","10","15","16","43","39","55","40","41","56","57","58","59","60"];
    var labels_and_ids17 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","44":"type_radio","45":"type_text","46":"type_radio","47":"type_text","48":"type_radio","51":"type_radio","50":"type_text","52":"type_text","10":"type_radio","31":"type_text","15":"type_radio","16":"type_radio","42":"type_date_new","43":"type_text","39":"type_text","53":"type_radio","54":"type_text","55":"type_text","40":"type_checkbox","41":"type_checkbox","56":"type_checkbox","57":"type_checkbox","58":"type_checkbox","59":"type_checkbox","60":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all17 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max17 = [];
    var file_upload_check17 = [];
    var spinner_check17 = [];
    var scrollbox_trigger_point17 = '20';
    var header_image_animation17 = 'none';
    var scrollbox_loading_delay17 = '0';
    var scrollbox_auto_hide17 = '1';
    var inputIds17 = '[]';
        var update_first_field_id17 = 0;
    var form_view_count17 = 0;
    // Occurs before the form is loaded
function before_load17() {	
}	
// Occurs just before submitting  the form
function before_submit17() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset17() {	
}
// Occurs after form is submitted and reloaded
function after_submit17() {
  
}    function onload_js17() {
  jQuery("#button_calendar_42, #fm-calendar-42").click(function() {
    jQuery("#wdform_42_element17").datepicker("show");
  }); 
  jQuery("#wdform_42_element17").datepicker({
    dateFormat: "mm/dd/yy",
    minDate: "",
    maxDate: "",
    changeMonth: true,
    changeYear: true,
    yearRange: "-100:+50",
    showOtherMonths: true,
    selectOtherMonths: true,
    firstDay: "0",
    beforeShow: function(input, inst) {
      jQuery("#ui-datepicker-div").addClass("fm_datepicker");
    },
    beforeShowDay: function(date) {
      var invalid_dates = "";
      var invalid_dates_finish = [];
      var invalid_dates_start = invalid_dates.split(",");
      var invalid_date_range =[];
      for(var i = 0; i < invalid_dates_start.length; i++ ) {
        invalid_dates_start[i] = invalid_dates_start[i].trim();
        if(invalid_dates_start[i].length < 11 || invalid_dates_start[i].indexOf("-") == -1){
          invalid_dates_finish.push(invalid_dates_start[i]);
        }
        else{
          if(invalid_dates_start[i].indexOf("-") > 4) {
            invalid_date_range.push(invalid_dates_start[i].split("-"));
          }
          else {
            var invalid_date_array = invalid_dates_start[i].split("-");
            var start_invalid_day = invalid_date_array[0] + "-" + invalid_date_array[1] + "-" + invalid_date_array[2];
            var end_invalid_day = invalid_date_array[3] + "-" + invalid_date_array[4] + "-" + invalid_date_array[5];
            invalid_date_range.push([start_invalid_day, end_invalid_day]);
          }
        }
      }
      jQuery.each(invalid_date_range, function( index, value ) {
        for(var d = new Date(value[0]); d <= new Date(value[1]); d.setDate(d.getDate() + 1)) {
          invalid_dates_finish.push(jQuery.datepicker.formatDate("mm/dd/yy", d));
        }
      });
      var string_days = jQuery.datepicker.formatDate("mm/dd/yy", date);
      var day = date.getDay();
      return [ invalid_dates_finish.indexOf(string_days) == -1 ];
    }
  });
  var default_date;
  var date_value = jQuery("#wdform_42_element17").val();
  (date_value != "") ? default_date = date_value : default_date = "";
  jQuery("#wdform_42_element17").datepicker("option", "dateFormat", "mm/dd/yy");
  if(default_date == "today") {
    jQuery("#wdform_42_element17").datepicker("setDate", new Date());
  }
  else if (default_date.indexOf("d") == -1 && default_date.indexOf("m") == -1 && default_date.indexOf("y") == -1 && default_date.indexOf("w") == -1) {
    jQuery("#wdform_42_element17").datepicker("setDate", default_date);
  }
  else {
    jQuery("#wdform_42_element17").datepicker("setDate", default_date);
  }    }

    function condition_js17() {    }

    function check_js17(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js17() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_44_allow_other17\" value=\"no\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_44_allow_other_num17\" value=\"0\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other17\" value=\"no\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other_num17\" value=\"0\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other17\" value=\"no\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other_num17\" value=\"0\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_51_allow_other17\" value=\"no\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_51_allow_other_num17\" value=\"0\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other17\" value=\"no\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num17\" value=\"0\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other17\" value=\"no\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num17\" value=\"0\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other17\" value=\"no\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other_num17\" value=\"0\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other17\" value=\"no\" />").appendTo("#form17");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other_num17\" value=\"0\" />").appendTo("#form17");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other17\" value=\"no\" />").appendTo("#form17");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num17\" value=\"0\" />").appendTo("#form17");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other17\" value=\"no\" />").appendTo("#form17");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num17\" value=\"0\" />").appendTo("#form17");
				  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other17\" value=\"no\" />").appendTo("#form17");
				  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other_num17\" value=\"0\" />").appendTo("#form17");
				  jQuery("<input type=\"hidden\" name=\"wdform_57_allow_other17\" value=\"no\" />").appendTo("#form17");
				  jQuery("<input type=\"hidden\" name=\"wdform_57_allow_other_num17\" value=\"0\" />").appendTo("#form17");
				  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other17\" value=\"no\" />").appendTo("#form17");
				  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other_num17\" value=\"0\" />").appendTo("#form17");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other17\" value=\"no\" />").appendTo("#form17");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other_num17\" value=\"0\" />").appendTo("#form17");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other17\" value=\"no\" />").appendTo("#form17");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other_num17\" value=\"0\" />").appendTo("#form17");
    var disabled_fields = "";
    jQuery("#form17 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields17\" value =\""+disabled_fields+"\" />").appendTo("#form17");
    };    }

    function unset_fields17( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields17(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity17( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 17,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form17 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form17 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form17 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready17() {
      if (jQuery('#form17 .wdform_section').length > 0) {
        fm_document_ready( 17 );
      }
      else {
        jQuery("#form17").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form17 .wdform_section').length > 0) {
        formOnload(17);
      }
      var ajaxObj17 = {};
      var value_ids17 = {};
      jQuery.each( jQuery.parseJSON( inputIds17 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form17 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form17 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form17 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form17 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids17[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids17[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form17 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids17[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj17.inputs = value_ids17;
          jQuery(document).on('change', '#form17 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids17[key + '|' + input_id] = id;
          jQuery.each( value_ids17, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids17).length;
              value_ids17 = unset_fields17( value_ids17, changing_field_id, count );
            }
          });
          ajaxObj17.inputs = value_ids17;
          ajax_similarity17( ajaxObj17, changing_field_id );
          });
        });
      });
      if ( update_first_field_id17 && !jQuery.isEmptyObject(ajaxObj17.inputs) ) {
        ajax_similarity17( ajaxObj17, update_first_field_id17 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready17();
    });
        