# SmartShopCA local port assignment — October 16, 2026

## Decision

Use fixed **3300** for SmartShopCA (`Can_Affliate`). The founder requested scanning existing project allocations and the Notion inventory before choosing an unused fixed port. Automatic/ephemeral port allocation does not meet this preference.

## Evidence

Reviewed the supplied [Mac System Ports inventory](https://app.notion.com/p/Mac-System-Ports-a3d86ae9b46140b18359718bfa240f08) and the related [sanitized July project map](https://app.notion.com/p/3a4965c99ae0819c949cc778e845403f). Both identify 3200 as a Resume Builder allocation/conflict. SmartShopCA has no separate assignment on the supplied page.

Scanned 1,752 local code/config/documentation text files beneath `/Users/balajik/projects`, excluding dependency directories, generated builds, caches, backups, lockfiles and large/binary files. Extracted only port-related values; no credentials copied into this record. Historical references were treated as possible reservations rather than proof of a running app. Projects with no explicit port found were not assumed to have no default server port.

| Project/family | Relevant configured or documented ports to avoid |
|:--|:--|
| Resume_Builder | 3200 |
| Canada_Conttractors | 3100 |
| swing-trade-analyzer | 3000 / 5001; older options references also overlap other projects |
| options-iq / Options_Engine_Codex | 3050 / 5051, plus 4001, 5050 and IB references |
| Trade_Engine_Codex | 3010 / 5010; historical 3000 / 5001 |
| options_iq_gemini | 5175 / 5002; July map records extra 5176–5180 sessions |
| portfolio-tracker | Current decision prefers 5191 / 5011; retained references include 5173, 5002 and 5003 |
| leveraged-etf-options-engine | 5050, 5052, 5501 |
| Tamil_Scriber / clientportal.gw / Portfolio | 5000 and related system/debug references |

Port 3300 appeared only in a SmartShopCA handoff example, not another scanned project's port declaration. The current `lsof -nP -iTCP -sTCP:LISTEN` inventory had no listener on 3300; a targeted 3300 listener check was also empty. This supports choosing 3300 now, not a claim that it can never be occupied in future. There is no system-wide reservation mechanism installed.

## Implementation and verification

`start.sh`, `npm run dev` and `npm start` consistently select 3300. Startup checks all TCP listener addresses on 3300; a collision causes failure without stopping the owner or changing ports. An explicit Next CLI port also fails on a bind race. Stop validates the saved PID/start-time identity and never kills a process merely because it owns a port.

Shell syntax and lifecycle smoke checks cover occupied-port refusal, preservation of a separate test listener, fixed-port HTTP 200, repeated start reusing the saved process and stop releasing its port. No app source or dependencies changed in this port correction; no application build rerun required. Notion inventories were read, not edited. Unrelated projects were read only. No commit, push or deployment.
