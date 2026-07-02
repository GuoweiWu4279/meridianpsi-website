---
question: 'Can I override a Guard rule mid-session?'
category: trading
order: 5
---

Yes, but it depends on how the rule was configured.

By design, Guard rules can be set with a **password-lock** to prevent in-session override. This is intentional — the purpose of Guard is to enforce a commitment made when you were not in a compromised state. An override available without friction defeats the mechanism.

If a rule is not password-locked, it can be paused or adjusted in the Guard configuration panel inside the Meridian dashboard at any time. If it is locked, you must enter the password you configured during setup.

A common approach is to set a password you will not remember under pressure — the point is to raise the cost of the override enough that it becomes a deliberate decision, not a reflexive one.
