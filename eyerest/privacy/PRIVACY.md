# Privacy Policy for EyeRest Reminder

Last updated: 14 October 2026

EyeRest Reminder ("the app") is developed by SUS Development, which is the controller of the data
described here. Questions, and any request about your data, go to contact@susdevelopment.pl.

The short version: your settings stay on your device. The app reports its own crashes so it can be
fixed, which you can switch off at any time, and it collects no usage statistics until you allow them.
The timer works exactly the same whichever way both of those are set.

## What the app sends, and on what basis

**Settings > Privacy** has two independent switches, and they do not rest on the same footing.

Crash reports are on from the first launch. We rely on our legitimate interest in keeping the app
working on the device you installed it on (Article 6(1)(f) GDPR), and the switch is how you object to
that at any time, with no reason to give and no effect on the timer.

Usage statistics are off until you allow them. Turning that switch on, or allowing it in the notice
shown the first time you open Settings, is the consent we rely on to collect them (Article 6(1)(a)
GDPR), and turning it off withdraws that consent.

### Crash reports

Handled by **Firebase Crashlytics**. While switched on, the app sends:

- crashes, and failures that do not crash the app: a timer phase the system ended late, a phase change
  the speech engine could not announce, a run the system dropped, exact alarms being refused;
- the technical context a report is read against: the app version, the Android version, the device
  model and its manufacturer ROM, the phase the timer was in, and whether exact alarms, notifications
  and battery optimization were allowing the app to work.

A report carries a Crashlytics installation identifier, which lets the reports from one installation be
counted as one. Like the Analytics identifier below, it is pseudonymous data rather than anonymous
data. A report carries no name, no email address, no contacts and nothing you type, and the app
attaches no location to it.

We weighed this against what it costs you before switching it on by default: the reports describe the
app and the device rather than you, they are not used to build any profile, nothing in them is used
for advertising, nothing is passed to a third party beyond the Google service that processes them for
us, and one tap in the app stops it. The balancing test we recorded is in `LEGITIMATE_INTEREST.md` in
the app's source repository, and we will send it to you on request.

### Usage statistics

Handled by **Google Analytics for Firebase**. When switched on, the app sends which features are used:
that a timer was started or stopped, that a phase ran to its end, and whether the scheduled reminder
is on.

Analytics also collects data of its own as soon as it is switched on, which we neither send nor
control in detail:

- automatically collected events, such as the first launch, sessions, app updates and app removals,
  together with the technical data attached to them: the app version, the device model, the operating
  system version and the device language;
- an approximate location, which Analytics derives from the IP address of the connection. For traffic
  from the EU, Switzerland and the UK, Google states that the IP address is used for that lookup and
  then discarded rather than logged, and the location it leaves behind is coarse: country, region and
  city. We do not enable Google signals, advertising features or data sharing for advertising
  purposes, and the app tells Analytics not to allow ad personalization signals.

These events are tied to an app instance identifier, a random identifier Analytics gives this
installation. It does not identify you by name, but it is a pseudonymous identifier rather than
anonymous data, which is why we ask before collecting it.

## Switching it off again

Both switches can be turned off at any time, in the same place and with the same single tap it took to
turn them on. From that moment:

- crash reporting stops, and any report still waiting on the device to be sent is discarded;
- usage statistics stop, and the Analytics identifier for this installation is deleted, so a later
  opt-in starts from a new one.

Switching crash reports off is treated as a lasting objection: it stays off through updates, and we do
not ask you about it again.

The usage statistics consent is recorded together with the version of the explanation it was given
under. If we ever change what those statistics collect, that switch goes back to off and we ask again
under the new explanation rather than carrying the old consent over.

Earlier versions of the app asked for a consent to crash reporting as well. An "off" stored by one of
those versions is honoured as an objection, but an "off" that only meant you had not yet opted in is
not: after updating, crash reporting is on unless you switched it off yourself. Usage statistics are
off until you allow them under the current explanation.

## Who processes the data

Both services are provided by Google, which processes the data on our behalf as our processor, under
the Google Cloud / Firebase data processing terms and Google's
[privacy policy](https://policies.google.com/privacy). The processing may take place outside the
European Economic Area, which Google covers with the European Commission's standard contractual
clauses.

We do not sell the data and do not pass it on to anyone other than these two Google services. As the
app stands today it carries no advertising, no ad network and no tracking across other apps or sites,
nothing we collect is used for advertising or profiling, and the advertising ID is not collected
either: the app explicitly removes the permissions that would allow it, and tells Analytics not to
allow ad personalization signals.

That is a description of the app as it is now rather than a promise about every future version. If the
app ever gains advertising, we will update this policy with a new "last updated" date before the
version that does it ships, and we will ask you for whatever that needs as a separate, clearly
labelled choice rather than reading it into anything you have already agreed to. What was collected
under this policy will not be fed into advertising afterwards.

Google is our processor for the data described here, but Google also processes some data as a
controller in its own right, as service data under its own terms, to operate, secure and maintain the
services. That processing is governed by the
[Firebase terms](https://firebase.google.com/terms), the
[Google Analytics terms](https://www.google.com/analytics/terms/) and Google's privacy policy, not by
this one.

## How long it is kept

- Crash reports: Google states that Crashlytics keeps crash stack traces, extracted minidump data and
  the associated identifiers for 90 days, counted from when they are received, before it starts
  removing them from its live and backup systems.
- Usage statistics: the event level data is kept for 2 months, the shortest retention Analytics offers,
  after which it is deleted automatically. Aggregated reports Google builds from it are not covered by
  that setting.

## Data the app stores on your device

The app saves your own settings locally so they survive a restart:

- selected theme and interface language
- announcement volume and vibration preferences
- scheduled reminder days and time
- your two reporting choices and the version of the explanation the statistics consent was given under
- the state of a running timer (current phase and when it ends)

This data never leaves your device. It is removed when you uninstall the app or clear its storage.

Android's own backup service may include your settings in your Google account backup, under Google's
privacy policy rather than ours. The running timer state is explicitly excluded from backup.

## Permissions and why they are needed

| Permission | Why |
|---|---|
| `FOREGROUND_SERVICE`, `FOREGROUND_SERVICE_SPECIAL_USE` | Keep the timer running and its countdown visible while you use other apps |
| `SCHEDULE_EXACT_ALARM` | End each work and rest phase at the exact moment it is due |
| `POST_NOTIFICATIONS` | Show the countdown and the phase change notifications |
| `VIBRATE` | Signal a phase change when vibration is enabled |
| `RECEIVE_BOOT_COMPLETED` | Restore your scheduled reminder after a device restart |
| `INTERNET`, `ACCESS_NETWORK_STATE` | Send the crash reports, and the usage statistics once you allow them |
| `WAKE_LOCK` | Required by the reporting libraries to finish sending a report |

## Text to speech

Phase announcements are spoken through the text to speech engine installed on your device. That
engine is a separate application with its own privacy policy. The app only passes it the word to
speak ("Work" or "Rest").

## Children

The app is not directed at children. No usage statistics are collected from anyone until they are
allowed, and the crash reports describe the app and the device rather than the person using it.

## Your rights

Under the GDPR you can ask us for access to the data held about your installation, for its erasure or
rectification, for a restriction of the processing, and for the data to be handed over in a portable
form.

Because the crash reporting rests on our legitimate interest, Article 21 GDPR entitles you to object to
it. The switch under Settings > Privacy is that objection: it takes effect immediately, needs no reason
and does not require you to write to us. You can withdraw the usage statistics consent in the same
place, which does not affect what was lawfully processed before.

You can also complain to your supervisory authority, which in Poland is the President of the Personal
Data Protection Office (Prezes UODO).

Write to contact@susdevelopment.pl to exercise any of these. The reports carry an installation
identifier rather than anything identifying you, so a request is easiest to act on if it is sent from
the device concerned and close to the time of the report.

## Changes

If this policy changes, the updated version will be published at this address with a new "last
updated" date. If the change concerns what the usage statistics collect, the app asks for that consent
again under the new explanation.

## Contact

Questions about this policy: contact@susdevelopment.pl
