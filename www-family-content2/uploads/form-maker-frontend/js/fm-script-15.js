    var fm_currentDate = new Date();
    var FormCurrency_15 = '$';
    var FormPaypalTax_15 = '0';
    var check_submit15 = 0;
    var check_before_submit15 = {};
    var required_fields15 = ["23","61","24","58","59","62","64","66","67","68","71","30","31","32","33","34","35","10","15","16","12","13","19","21","22","27","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","56","70","73","74"];
    var labels_and_ids15 = {"23":"type_text","61":"type_date_new","24":"type_submitter_mail","58":"type_text","59":"type_text","62":"type_radio","63":"type_text","64":"type_radio","65":"type_text","66":"type_radio","67":"type_radio","68":"type_text","69":"type_radio","71":"type_text","30":"type_date_new","31":"type_text","32":"type_text","33":"type_text","34":"type_text","35":"type_text","10":"type_radio","15":"type_radio","16":"type_radio","14":"type_text","25":"type_text","36":"type_text","37":"type_textarea","12":"type_radio","13":"type_radio","19":"type_radio","21":"type_radio","22":"type_radio","27":"type_radio","38":"type_radio","39":"type_radio","40":"type_radio","41":"type_radio","42":"type_radio","43":"type_radio","44":"type_radio","45":"type_radio","46":"type_radio","47":"type_radio","48":"type_radio","49":"type_radio","50":"type_radio","51":"type_radio","52":"type_radio","53":"type_radio","55":"type_textarea","56":"type_radio","57":"type_textarea","70":"type_radio","72":"type_text","73":"type_radio","74":"type_radio","1":"type_submit_reset"};
    var check_regExp_all15 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"58":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max15 = [];
    var file_upload_check15 = [];
    var spinner_check15 = [];
    var scrollbox_trigger_point15 = '20';
    var header_image_animation15 = 'none';
    var scrollbox_loading_delay15 = '0';
    var scrollbox_auto_hide15 = '1';
    var inputIds15 = '[]';
        var update_first_field_id15 = 0;
    var form_view_count15 = 0;
    // Occurs before the form is loaded
function before_load15() {	
}	
// Occurs just before submitting  the form
function before_submit15() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset15() {	
}
// Occurs after form is submitted and reloaded
function after_submit15() {
  
}    function onload_js15() {
  jQuery("#button_calendar_61, #fm-calendar-61").click(function() {
    jQuery("#wdform_61_element15").datepicker("show");
  }); 
  jQuery("#wdform_61_element15").datepicker({
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
  var date_value = jQuery("#wdform_61_element15").val();
  (date_value != "") ? default_date = date_value : default_date = "";
  jQuery("#wdform_61_element15").datepicker("option", "dateFormat", "mm/dd/yy");
  if(default_date == "today") {
    jQuery("#wdform_61_element15").datepicker("setDate", new Date());
  }
  else if (default_date.indexOf("d") == -1 && default_date.indexOf("m") == -1 && default_date.indexOf("y") == -1 && default_date.indexOf("w") == -1) {
    jQuery("#wdform_61_element15").datepicker("setDate", default_date);
  }
  else {
    jQuery("#wdform_61_element15").datepicker("setDate", default_date);
  }
  jQuery("#button_calendar_30, #fm-calendar-30").click(function() {
    jQuery("#wdform_30_element15").datepicker("show");
  }); 
  jQuery("#wdform_30_element15").datepicker({
    dateFormat: "dd/mm/y",
    minDate: "",
    maxDate: "",
    changeMonth: true,
    changeYear: true,
    yearRange: "-100:+50",
    showOtherMonths: true,
    selectOtherMonths: true,
    firstDay: "1",
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
          invalid_dates_finish.push(jQuery.datepicker.formatDate("dd/mm/y", d));
        }
      });
      var string_days = jQuery.datepicker.formatDate("dd/mm/y", date);
      var day = date.getDay();
      return [ invalid_dates_finish.indexOf(string_days) == -1 ];
    }
  });
  var default_date;
  var date_value = jQuery("#wdform_30_element15").val();
  (date_value != "") ? default_date = date_value : default_date = "dd/mm/y";
  jQuery("#wdform_30_element15").datepicker("option", "dateFormat", "dd/mm/y");
  if(default_date == "today") {
    jQuery("#wdform_30_element15").datepicker("setDate", new Date());
  }
  else if (default_date.indexOf("d") == -1 && default_date.indexOf("m") == -1 && default_date.indexOf("y") == -1 && default_date.indexOf("w") == -1) {
    jQuery("#wdform_30_element15").datepicker("setDate", default_date);
  }
  else {
    jQuery("#wdform_30_element15").datepicker("setDate", default_date);
  }    }

    function condition_js15() {    }

    function check_js15(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js15() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_64_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_64_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_66_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_66_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_67_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_67_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_69_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_69_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_19_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_19_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_21_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_21_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_22_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_22_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_27_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_27_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_38_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_38_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_39_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_39_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_42_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_42_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_43_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_43_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_44_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_44_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_45_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_45_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_47_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_47_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_49_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_49_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_51_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_51_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_52_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_52_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_70_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_70_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_73_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_73_allow_other_num15\" value=\"0\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_74_allow_other15\" value=\"no\" />").appendTo("#form15");
  jQuery("<input type=\"hidden\" name=\"wdform_74_allow_other_num15\" value=\"0\" />").appendTo("#form15");
    var disabled_fields = "";
    jQuery("#form15 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields15\" value =\""+disabled_fields+"\" />").appendTo("#form15");
    };    }

    function unset_fields15( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields15(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity15( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 15,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form15 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form15 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form15 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready15() {
      if (jQuery('#form15 .wdform_section').length > 0) {
        fm_document_ready( 15 );
      }
      else {
        jQuery("#form15").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form15 .wdform_section').length > 0) {
        formOnload(15);
      }
      var ajaxObj15 = {};
      var value_ids15 = {};
      jQuery.each( jQuery.parseJSON( inputIds15 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form15 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form15 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form15 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form15 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids15[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids15[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form15 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids15[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj15.inputs = value_ids15;
          jQuery(document).on('change', '#form15 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids15[key + '|' + input_id] = id;
          jQuery.each( value_ids15, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids15).length;
              value_ids15 = unset_fields15( value_ids15, changing_field_id, count );
            }
          });
          ajaxObj15.inputs = value_ids15;
          ajax_similarity15( ajaxObj15, changing_field_id );
          });
        });
      });
      if ( update_first_field_id15 && !jQuery.isEmptyObject(ajaxObj15.inputs) ) {
        ajax_similarity15( ajaxObj15, update_first_field_id15 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready15();
    });
        