/**
 * This script file will (or atleast should) run before the main script file runs.
 * This file should contain stuff like options, global variables (etc.) to be used by the main script.
 */

// Options

// URL options can override the options below.
// Options set through the menu can override both until the page is refreshed.
options = {
    username: 'Amox Bot',
    avatar: 'https://cdn.discordapp.com/icons/1227329814307016814/a_30efe06fa93052036341a24931b34439.gif',
    verified: false,
    noUser: false,
    data: null,
    guiTabs: [],
    useJsonEditor: false,
    reverseColumns: false,
    allowPlaceholders: true,
    autoUpdateURL: true,
    autoParams: false,
    hideEditor: false,
    hidePreview: false,
    hideMenu: true,
    single: false,
    noMultiEmbedsOption: true,
    sourceOption: false, // Display link to source code in menu.
}

// Default JSON object

json = {
    content: ""
}


// Write any code under the 'DOMContentLoaded' event to run after the page has loaded.
// Add this to your main script file or at the end of your existing script.js

function renderList(items) {
    const dropdownList = document.getElementById("dropdownList");
    dropdownList.innerHTML = "";
    items.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        li.addEventListener("click", () => {
            searchInput.value = name;
            dropdownList.classList.add("hidden");
            fetch(`./config/responses/${name}.json`)
                .then(res => res.json())
                .then(data => {
                    window.json = data;
                    const editor = window.CodeMirrorEditor || null;
                    if (editor) {
                        editor.setValue(JSON.stringify(data, null, 4));
                    }
                })
                .catch(err => alert("Failed to load template. This is expected."));
        });
        dropdownList.appendChild(li);
    });
}
document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");
    const dropdownList = document.getElementById("dropdownList");
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.classList.add("save-button");
    document.querySelector(".search-dropdown").appendChild(saveButton);

    const templates = [
        "fallback",
        "ticket_open_thread_message",
        "offer_thread_accepted",
        "offer_thread_closed",
        "commission_type_selection",
        "ticket_monitoring_payment_reminder",
        "ticket_monitoring_no_freelancer_chosen_reminder",
        "ticket_monitoring_deadline_passed_in_progress",
        "ticket_monitoring_deadline_passed_management",
        "ticket_monitoring_in_progress_check_in",
        "ticket_monitoring_review_reminder",
        "ticket_monitoring_support_inactivity",
        "ticket_closed",
        "transcript_ticket_thread",
        "dm_transcript_ticket",
        "transcript_ticket_channel_successful_dm",
        "transcript_ticket_channel_no_member",
        "command_not_in_text_channel",
        "ticket_not_found",
        "command_not_in_support_ticket",
        "ticket_no_freelancer",
        "generic_freelancer_permission_error",
        "command_not_configured",
        "command_disabled",
        "command_not_enough_permissions",
        "command_incorrectly_configured",
        "bot_still_starting",
        "ticket_delete_error",
        "commission_offer_generic_error",
        "commission_offer_accepted_waiting_for_payment",
        "commission_payment_link_creation_error",
        "ticket_already_closed",
        "ticket_close_error",
        "ticket_closed_message",
        "commission_offer_opening_not_allowed",
        "commission_offer_opening_error",
        "commission_offer_opening",
        "ticket_not_created_due_to_timeout",
        "ticket_created_first_message",
        "ticket_created",
        "offer_not_created_due_to_timeout",
        "invalid_payment_amount_not_a_number",
        "invalid_payment_amount_too_low",
        "invalid_payment_amount_too_high",
        "commission_offer_message",
        "commission_offer_created",
        "offer_thread_closed_message",
        "features_disabled",
        "customer_exclusive_command",
        "failed_to_update_linked_roles",
        "linked_roles_updated",
        "create_commission_type_select_tags",
        "thread_is_not_commission_opener_post",
        "generic_error_with_reason",
        "commission_type_post_regenerated",
        "ticket_not_of_commission_type",
        "ticket_cannot_modify_closed_ticket",
        "ticket_user_added",
        "ticket_cannot_remove_freelancer",
        "ticket_cannot_remove_customer",
        "ticket_user_removed",
        "ticket_cannot_escalate_management_ticket",
        "ticket_escalated",
        "ticket_cannot_modify_not_in_progress",
        "faq_response_id_invalid",
        "faq_already_exists",
        "faq_added",
        "faq_deleted",
        "subuser_cannot_add_same_user",
        "freelancer_not_found",
        "freelancer_not_active",
        "user_already_subuser_for_other_freelancer",
        "cannot_add_main_freelancer_as_subuser",
        "subuser_added",
        "cannot_remove_main_freelancer",
        "subuser_removed",
        "freelancer_reonboarded",
        "freelancer_already_onboarded",
        "freelancer_id_already_used",
        "freelancer_display_name_already_used",
        "freelancer_onboard_select_commission_type",
        "freelancer_onboard_success",
        "freelancer_offboarded",
        "freelancer_already_offboarded",
        "freelancer_modify_commission_type",
        "freelancer_modify_commission_type_success",
        "invalid_freelancer_revenue_value",
        "invoice_amount_too_low",
        "invoice_amount_too_high",
        "customer_not_found",
        "malformed_payment_no_metadata",
        "malformed_payment_ticket_not_in_db",
        "malformed_payment_no_ticket_channel_found",
        "ticket_message_payment_success"
    ]        


    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filtered = templates.filter(t => t.toLowerCase().includes(query));
        renderList(filtered);
        dropdownList.classList.toggle("hidden", filtered.length === 0);
    });

    saveButton.addEventListener("click", () => {
        const filename = searchInput.value.trim() || "untitled";
        const data = JSON.stringify(window.json, null, 4);
        const blob = new Blob([data], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = filename + ".json";
        a.click();
        URL.revokeObjectURL(a.href);
    });
});

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = '';
});