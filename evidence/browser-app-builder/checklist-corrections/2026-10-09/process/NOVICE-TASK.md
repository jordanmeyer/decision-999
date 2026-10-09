# Approval Studio novice task

Use the corrected source `ee5a30024747779677ef30dfea33bf8fae58bf32` or its reviewed successor at http://127.0.0.1:9722/bab-example-process/. Do not use the older public version until this correction is published. Start from a reload. Give the participant only the task text below, without the facilitator answer.

## Participant task

1. Explain what the starting result says about the process's capacity and its 471.5-minute number. Before editing, predict whether sending 10% rather than30% of requests through Procurement fixes the problem.
2. Make that routing change using the editor, preserving the rest of the process. Explain what changed and what did not. Deliberately leave the outgoing shares totaling90% and apply them; recover to a valid100% total.
3. Starting from the original example, add a10-minute Managers review on the direct Manager→Finance route, with no entered wait. Send90% directly through this new step and10% through Procurement. Set Managers capacity to680. Reconnect the new step back to Manager approval to create a loop, then recover without loading the original example. Save the valid process, restore the original example, and load your saved version. Explain whether the comparison baseline traveled with it.
4. Name one decision this model cannot settle. Explain what you would investigate before recommending this routing in a real process.

## Facilitator answer — withhold during the task

Default Finance workload480/420=114.3%; nominal time is an entered weighted sum excluding congestion, not sustainable turnaround. The90/10 routing gives370.5min/request (101less) while Finance remains overloaded. The first edited share remains pending; Apply validates the group. An invalid90% total should name Manager approval and pause results; correction or Restore last valid recovers.

The extra step receives36requests/day, adds9expected touch minutes, and yields379.5nominal minutes. Managers work=(8+9)×40=680 at100%; Finance remains480/420. Reconnecting Extra review to Manager creates a named loop; one structural undo restores the pre-reconnect draft. Export/import preserves the valid draft and positions but not the separate baseline or undo. Risk classification/control effectiveness and actual queue waiting are outside the model.

PROC-12 requires the observed complete cycle, not merely that the model case passes. If the participant cannot finish, retain that result and record where the task stopped. Do not claim unassisted success after showing this answer.

## Session record — leave blank until observed

Status: prepared, not run. No novice outcome is claimed.

- Participant alias / relevant prior experience:
- Facilitator / date:
- Exact app commit and URL opened:
- Device, browser, viewport or text setting:
- Participant consent to record task notes (no identifying personal data needed):
- Each task: prediction verbatim; actions/wrong turns; result explanation verbatim; help requested; help given; completion or stopping point:
- One confusing phrase or control in the participant's own words:
- Change proposed from the observation, or reason no change is needed:

Do not coach, point to controls, reveal expected values or correct a prediction during the task. Ask only “What are you thinking?” or “What would you try next?” If help is necessary, record exactly what was given and mark completion as assisted. An agent executing the script is a developer interaction check, not a novice session. Do not relabel it as student evidence. This protocol is separate from an actual screen-reader complete-task evaluation.
