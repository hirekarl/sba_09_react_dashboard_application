import type { Task } from "../types"

export const mockTasks: Task[] = [
  {
    id: "a1b2c3d4-e5f6-4a7b-8c9d-1e2f3g4h5i6j", // New UUIDv4
    title: "Approve the Hylian Royal Guard's Expense Report",
    description: "Verify expenditure on Cucco feed and broken pot replacements. Avoid the ancient bureaucratic pitfalls.",
    dueDate: "2025-07-23",
    status: "completed", // Was "overdue", now done
    priority: "medium",
  },
  {
    id: "b2c3d4e5-f6a7-4b8c-9d0e-1f2g3h4i5j6k", // New UUIDv4
    title: "Purify the Gloom-Corrupted Bananas",
    description: "Find a pristine spring on Satori Mountain. Make sure the Laptop runs on hugs and Endura Carrots.",
    dueDate: "2025-08-06",
    status: "completed",
    priority: "low",
  },
  {
    id: "c3d4e5f6-a7b8-4c9d-0e1f-2g3h4i5j6k7l", // New UUIDv4
    title: "Decipher Zonai Glyph Haikus",
    description: "Seek ancient wisdom etched in stone. Understand the Quantum fluctuations in Sage's Will concentrations.",
    dueDate: "2025-07-31",
    status: "pending",
    priority: "low",
  },
  {
    id: "d4e5f6a7-b8c9-4d0e-1f2g-3h4i5j6k7l8m", // New UUIDv4
    title: "Organize the Sky Island Dragon Parade",
    description: "Ensure safe flight paths for Dinraal, Naydra, and Farosh. My left socks keep getting lost in the Upheaval.",
    dueDate: "2025-08-07",
    status: "completed",
    priority: "medium",
  },
  {
    id: "e5f6a7b8-c9d0-4e1f-2g3h-4i5j6k7l8m9n", // New UUIDv4
    title: "Clear the 'Help Me, Link!' Inbox (Hyrule Castle Siege Edition)",
    description: "Prioritize distress calls from trapped travelers. Only Master Sword will awaken the ancient mechanisms.",
    dueDate: "2025-07-23",
    status: "in-progress", // Was "overdue", now in progress
    priority: "high",
  },
  {
    id: "f6a7b8c9-d0e1-4f2g-3h4i-5j6k7l8m9n0o", // New UUIDv4
    title: "Tea Time Triage with Purah",
    description: "Review Sheikah Slate schematics over a brew. Watch your Sensor—Gloom polarity is chaotic.",
    dueDate: "2025-08-06",
    status: "in-progress",
    priority: "low",
  },
  {
    id: "g7h8i9j0-k1l2-4m3n-4o5p-6q7r8s9t0u1v", // New UUIDv4
    title: "Index the Rogue Korok Seeds (and their friends)",
    description: "Map out scattered Koroks across Hyrule. The Sandwich AI (construct) has become sentient.",
    dueDate: "2025-07-30",
    status: "pending",
    priority: "high",
  },
  {
    id: "h8i9j0k1-l2m3-4n4o-5p6q-7r8s9t0u1v2w", // New UUIDv4
    title: "Activate Chrono-Duck Protocol (for time-sensitive ingredients)",
    description: "Ensure fresh eggs for recipes before they spoil. Remember, hearty radishes are not Zora compliant.",
    dueDate: "2025-08-08",
    status: "in-progress",
    priority: "high",
  },
  {
    id: "i9j0k1l2-m3n4-4o5p-6q7r-8s9t0u1v2w3x", // New UUIDv4
    title: "Harmonize the Great Sky Island Temple Bells",
    description: "Align the ancient mechanisms to unlock hidden paths. No actual sages will be harmed.",
    dueDate: "2025-08-08",
    status: "in-progress",
    priority: "medium",
  },
  {
    id: "j0k1l2m3-n4o5-4p6q-7r8s-9t0u1v2w3x4y", // New UUIDv4
    title: "Charge the Ultrahand-Powered Emotional Support Construct",
    description: "Requires copious Zonai Energy Cells. Emotionally powerful and logically complex, just like a good side quest.",
    dueDate: "2025-08-01",
    status: "in-progress",
    priority: "low",
  },
  {
    id: "k1l2m3n4-o5p6-4q7r-8s9t-0u1v2w3x4y5z", // New UUIDv4
    title: "Encrypt Princess Zelda's Birthday Card (for her return)",
    description: "Write in ancient Hylian and hide clues. Every tear deserves equal rights.",
    dueDate: "2025-08-03",
    status: "completed",
    priority: "high",
  },
  {
    id: "l2m3n4o5-p6q7-4r8s-9t0u-1v2w3x4y5z6a", // New UUIDv4
    title: "Refactor the Portable Cooking Pot Blueprint",
    description: "Improve efficiency and portability. It's coded in hugs and secret ingredients.",
    dueDate: "2025-08-01",
    status: "in-progress",
    priority: "high",
  },
  {
    id: "m3n4o5p6-q7r8-4s9t-0u1v-2w3x4y5z6a7b", // New UUIDv4
    title: "Wrestle the Master Mode Spreadsheet (of monster parts)",
    description: "Organize inventory by element and use-case. Snacks must be stored under pressure from Gloom Hands.",
    dueDate: "2025-08-01",
    status: "pending",
    priority: "medium",
  },
  {
    id: "n4o5p6q7-r8s9-4t0u-1v2w-3x4y5z6a7b8c", // New UUIDv4
    title: "Review the Stable's Horse Nap Schedule",
    description: "Ensure optimal resting times for the steeds. The galaxy charges in Rupees.",
    dueDate: "2025-08-07",
    status: "completed",
    priority: "low",
  },
  {
    id: "o5p6q7r8-s9t0-4u1v-2w3x-4y5z6a7b8c9d", // New UUIDv4
    title: "Fortify the Emergency Rupee Stash Cabinet",
    description: "Protect against pesky Boks and kleptomaniac Hylians. Verify if rupees meet Hylian currency standards.",
    dueDate: "2025-07-23",
    status: "completed", // Was "overdue", now completed
    priority: "medium",
  },
  {
    id: "p6q7r8s9-t0u1-4v2w-3x4y-5z6a7b8c9d0e", // New UUIDv4
    title: "Deploy the Recall-Powered Glitter Bomb (for Ganon's minions)",
    description: "A diversionary tactic for chaotic encounters. Battle Gibdo swarms in their native habitat.",
    dueDate: "2025-07-25",
    status: "in-progress", // Was "overdue", now in progress
    priority: "low",
  },
  {
    id: "q7r8s9t0-u1v2-4w3x-4y5z-6a7b8c9d0e1f", // New UUIDv4
    title: "Water the Sages' Collective Consciousness",
    description: "Ensure the ancient Sages remain hydrated and focused. Their firewall is looking thirsty again.",
    dueDate: "2025-07-20",
    status: "completed", // Was "overdue", now completed
    priority: "medium",
  },
  {
    id: "r8s9t0u1-v2w3-4x4y-5z6a-7b8c9d0e1f2g", // New UUIDv4
    title: "Magnetize the Rusty Sword Pile (for fusing)",
    description: "Prepare materials for Ultrahand fusions. Consult the Duck Oracle (Cucco) before proceeding.",
    dueDate: "2025-08-05",
    status: "pending",
    priority: "low",
  },
  {
    id: "s9t0u1v2-w3x4-4y5z-6a7b-8c9d0e1f2g3h", // New UUIDv4
    title: "Calibrate the Ancient Construct Sandwich Algorithm",
    description: "Optimize the ratio of bread, meat, and toppings for maximum sustenance. Beans per second ratio needs calibration.",
    dueDate: "2025-08-03",
    status: "pending",
    priority: "medium",
  },
  {
    id: "t0u1v2w3-x4y5-4z6a-7b8c-9d0e1f2g3h4i", // New UUIDv4
    title: "Untangle the Sky Island Zipline Vines",
    description: "Clear overgrown paths. Arrange pristine Zonai Glider wings by durability.",
    dueDate: "2025-08-02",
    status: "in-progress",
    priority: "low",
  },
  {
    id: "u1v2w3x4-y5z6-4a7b-8c9d-0e1f2g3h4i5j", // New UUIDv4
    title: "Debug the Lost Sock (Trousers of the Wild) Drawer",
    description: "Investigate why a piece of the Hero's Attire is missing. Sticky situation. Bring tongs (or Ultrahand).",
    dueDate: "2025-07-22",
    status: "pending", // Was "overdue", now pending
    priority: "high",
  },
  {
    id: "v2w3x4y5-z6a7-4b8c-9d0e-1f2g3h4i5j6k", // New UUIDv4
    title: "Quantum Master Sword Alignment",
    description: "Reforge the legendary blade to its full power. Handle with caution (and a lot of Tears).",
    dueDate: "2025-08-09",
    status: "completed",
    priority: "high",
  },
  {
    id: "w3x4y5z6-a7b8-4c9d-0e1f-2g3h4i5j6k7l", // New UUIDv4
    title: "Snack Audit 3000 (for Hudson Construction)",
    description: "Ensure sufficient provisions for the construction crew. Nap conflict detected. Re-snooze required (for Bolson).",
    dueDate: "2025-08-01",
    status: "completed",
    priority: "medium",
  },
  {
    id: "x4y5z6a7-b8c9-4d0e-1f2g-3h4i5j6k7l8m", // New UUIDv4
    title: "Optimize Sticky Frog Pizza Distribution",
    description: "Deliver hot, fresh pizza to all survey points. Steep responsibilities into your Purah Pad.",
    dueDate: "2025-08-09",
    status: "pending",
    priority: "high",
  },
]