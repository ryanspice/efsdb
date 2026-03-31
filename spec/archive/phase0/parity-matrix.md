# Parity Matrix

| Surface | Status | Note |
| --- | --- | --- |
| encrypted manifest/chunk storage | keep but refactor | real core behavior |
| auth/session rotation | keep as-is | already characterized and passing |
| effective-role display mode | keep as-is | preserve actual actor identity |
| login CE host | keep but refactor | useful migration pattern |
| explorer CE host | keep but refactor | useful migration pattern |
| legacy admin PHP page | replace for 1.0 | highest-risk UI surface |
| detached PHP public runtime | keep but refactor | reference implementation only |
| products endpoints | keep but refactor | endpoint family may survive; contract does not |
| search endpoints | keep but refactor | endpoint family may survive; contract does not |
| facets endpoints | keep but refactor | endpoint family may survive; contract does not |
| tombstone/restore/GC | missing and must implement | no lifecycle today |
| publish/staging roots | missing and must implement | no root pointer model today |
| audit summaries | missing and must implement | audit service is stubbed |
