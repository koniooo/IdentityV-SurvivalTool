type Language = "ja" | "en";
type LocalizedText = Record<Language, string>;

export type CoolTime = {
  firstStageSeconds: number;
  secondStageSeconds?: number;
};

export type SkillData = {
  name: LocalizedText;
  coolTime: CoolTime;
};

type Skills =
  | { primary: SkillData; secondary?: never; tertiary?: never }
  | { primary: SkillData; secondary: SkillData; tertiary?: never }
  | { primary: SkillData; secondary: SkillData; tertiary: SkillData };

type HunterDatum = {
  name: LocalizedText;
  skills: Skills;
};

export const hunterData: readonly HunterDatum[] = [
  {
    name: {
      ja: "復讐者",
      en: "Hell Ember",
    },
    skills: {
      primary: {
        name: { ja: "黄パペット\n位置交換", en: "Yellow\nPuppet" },
        coolTime: { firstStageSeconds: 20 },
      },
      secondary: {
        name: { ja: "赤パペット\n位置交換", en: "Red\nPuppet" },
        coolTime: { firstStageSeconds: 20 },
      },
    },
  },
  {
    name: {
      ja: "道化師",
      en: "Smiley Face",
    },
    skills: {
      primary: {
        name: { ja: "ロケット\nダッシュ", en: "Rocket Dash" },
        coolTime: { firstStageSeconds: 12 },
      },
      secondary: {
        name: {
          ja: "ロケット\nダッシュ\n《抵抗》",
          en: 'Rocket Dash\n"Resistance"',
        },
        coolTime: { firstStageSeconds: 6 },
      },
    },
  },
  {
    name: {
      ja: "断罪狩人",
      en: "Gamekeeper",
    },
    skills: {
      primary: {
        name: { ja: "チェーン\nクロウ", en: "Chain Hook" },
        coolTime: { firstStageSeconds: 14 },
      },
      secondary: {
        name: { ja: "トラバサミ", en: "Trap" },
        coolTime: { firstStageSeconds: 8, secondStageSeconds: 5 },
      },
    },
  },
  {
    name: {
      ja: "リッパー",
      en: "The Ripper",
    },
    skills: {
      primary: {
        name: { ja: "寒霧", en: "Freezing Fog" },
        coolTime: { firstStageSeconds: 20 },
      },
    },
  },
  {
    name: {
      ja: "結魂者",
      en: "Soul Weaver",
    },
    skills: {
      primary: {
        name: { ja: "糸を吐く", en: "Spinning" },
        coolTime: { firstStageSeconds: 10 },
      },
    },
  },
  {
    name: {
      ja: "芸者",
      en: "Geisha",
    },
    skills: {
      primary: {
        name: { ja: "刹那生滅", en: "Dash Hit" },
        coolTime: { firstStageSeconds: 8 },
      },
      secondary: {
        name: { ja: "アゲハ\nチャージ", en: "Butterfly\ncharge" },
        coolTime: { firstStageSeconds: 17 },
      },
    },
  },
  {
    name: {
      ja: "白黒無常",
      en: "Wu Chang",
    },
    skills: {
      primary: {
        name: { ja: "諸行無常", en: "Summon" },
        coolTime: { firstStageSeconds: 30 },
      },
      secondary: {
        name: { ja: "吸魂", en: "Siphon\nSoul" },
        coolTime: { firstStageSeconds: 5, secondStageSeconds: 20 },
      },
      tertiary: {
        name: { ja: "揺魄", en: "Wavering\nSoul" },
        coolTime: { firstStageSeconds: 15 },
      },
    },
  },
  {
    name: {
      ja: "写真家",
      en: "Photographer",
    },
    skills: {
      primary: {
        name: { ja: "写真世界", en: "Camera\nWorld" },
        coolTime: { firstStageSeconds: 60, secondStageSeconds: 45 },
      },
      secondary: {
        name: { ja: "痕跡記録", en: "move record" },
        coolTime: { firstStageSeconds: 15 },
      },
    },
  },
  {
    name: {
      ja: "狂眼",
      en: "Mad Eyes",
    },
    skills: {
      primary: {
        name: { ja: "仕掛け壁\n消失", en: "fence\ndisap-\npearance" },
        coolTime: { firstStageSeconds: 40 },
      },
      secondary: {
        name: { ja: "未解読\n暗号機\n付近", en: "nearby\nundecoded\nMachines" },
        coolTime: { firstStageSeconds: 20 },
      },
      tertiary: {
        name: { ja: "オーバー\nクロック", en: "Overclock" },
        coolTime: { firstStageSeconds: 10, secondStageSeconds: 20 },
      },
    },
  },
  {
    name: {
      ja: "黄衣の王",
      en: "The Feaster",
    },
    skills: {
      primary: {
        name: { ja: "悪夢浸蝕", en: "Nightmare\nAttack" },
        coolTime: { firstStageSeconds: 5 },
      },
      secondary: {
        name: { ja: "悪夢凝視", en: "Nightmare\nGaze" },
        coolTime: { firstStageSeconds: 20, secondStageSeconds: 5 },
      },
    },
  },
  {
    name: {
      ja: "夢の魔女",
      en: "Dream Witch",
    },
    skills: {
      primary: {
        name: { ja: "寄生\n（存在感０）", en: "Leech\n(presence 0)" },
        coolTime: { firstStageSeconds: 75 }, // オリジナル信者（寄生信者は含まない）で殴るたびにクールタイムが40%短くなる（例えば残り時間が60秒のときに殴れば残り時間が60×0.6=36秒になる）
      },
      secondary: {
        name: { ja: "同化\n（存在感１）", en: "Assimilation\n(presence 1)" },
        coolTime: { firstStageSeconds: 45 }, // 上に同じ
      },
    },
  },
  {
    name: {
      ja: "泣き虫",
      en: "Axe Boy",
    },
    skills: {
      primary: {
        name: { ja: "怨霊消滅", en: "Dispel\nSouls" },
        coolTime: { firstStageSeconds: 15 },
      },
      secondary: {
        name: { ja: "怨霊の\n巡回", en: "Resentful\nSouls\nrevolving" },
        coolTime: { firstStageSeconds: 30 },
      },
      tertiary: {
        name: { ja: "安息の道", en: "Restful\nRoad" },
        coolTime: { firstStageSeconds: 18 },
      },
    },
  },
  {
    name: {
      ja: "魔トカゲ",
      en: "Evil Reptilian",
    },
    skills: {
      primary: {
        name: { ja: "ハンタージャンプ", en: "Preying Leap" },
        coolTime: { firstStageSeconds: 11 },
      },
    },
  },
  {
    name: {
      ja: "血の女王",
      en: "Bloody Queen",
    },
    skills: {
      primary: {
        name: { ja: "鏡影", en: "Mirror Image" },
        coolTime: { firstStageSeconds: 13, secondStageSeconds: 15 },
      },
    },
  },
  {
    name: {
      ja: "ガードNo.26",
      en: "Guard 26",
    },
    skills: {
      primary: {
        name: { ja: "リモコン爆弾", en: "Remote-Controlled Bomb" },
        coolTime: { firstStageSeconds: 40, secondStageSeconds: 35 },
      },
    },
  },
  {
    name: {
      ja: "｢使徒｣",
      en: '"Disciple"',
    },
    skills: {
      primary: {
        name: { ja: "急襲", en: "Swoop" },
        coolTime: { firstStageSeconds: 10 },
      },
      secondary: {
        name: { ja: "ランウェイ", en: "Catwalk" },
        coolTime: { firstStageSeconds: 16 },
      },
    },
  },
  {
    name: {
      ja: "ヴァイオリニスト",
      en: "Violinist",
    },
    skills: {
      primary: {
        name: { ja: "奏鳴曲", en: "Sonata" },
        coolTime: { firstStageSeconds: 13 },
      },
      secondary: {
        name: { ja: "狂想曲", en: "Rhapsody" },
        coolTime: { firstStageSeconds: 9, secondStageSeconds: 14 },
      },
    },
  },
  {
    name: {
      ja: "彫刻師",
      en: "Sculptor",
    },
    skills: {
      primary: {
        name: { ja: "彫像\nチャージ", en: "Sculptures\ncharge" },
        coolTime: { firstStageSeconds: 16 },
      },
      secondary: {
        name: { ja: "象形墓場", en: "Hieroglyphic\nGraveyard" },
        coolTime: { firstStageSeconds: 12, secondStageSeconds: 15 },
      },
    },
  },
  {
    name: {
      ja: "｢アンデッド｣",
      en: '"Undead"',
    },
    skills: {
      primary: {
        name: { ja: "溜め重叩き", en: "Charged\nStrike" },
        coolTime: { firstStageSeconds: 14 },
      },
      secondary: {
        name: { ja: "エネルギー\n変換", en: "Energy\nConversion" },
        coolTime: { firstStageSeconds: 35 },
      },
    },
  },
  {
    name: {
      ja: "破輪",
      en: "The Breaking Wheel",
    },
    skills: {
      primary: {
        name: { ja: "悲観", en: "Pessimistic" },
        coolTime: { firstStageSeconds: 32 },
      },
      secondary: {
        name: { ja: "突刺の輪", en: "Wheel of\nImpalement" },
        coolTime: { firstStageSeconds: 6, secondStageSeconds: 14 },
      },
      tertiary: {
        name: { ja: "道化", en: "Ridicule" },
        coolTime: { firstStageSeconds: 30 },
      },
    },
  },
  {
    name: {
      ja: "漁師",
      en: "Naiad",
    },
    skills: {
      primary: {
        name: { ja: "漁狩", en: "Spearfishing" },
        coolTime: { firstStageSeconds: 19, secondStageSeconds: 9 },
      },
      secondary: {
        name: { ja: "驚波", en: "Surging\nTides" },
        coolTime: { firstStageSeconds: 15 },
      },
    },
  },
  {
    name: {
      ja: "蝋人形師",
      en: "Wax Artist",
    },
    skills: {
      primary: {
        name: {
          ja: "蝋付着\n操作不能\n時間",
          en: "Wax-coated\nunusable\ntime",
        },
        coolTime: { firstStageSeconds: 15 },
      },
      secondary: {
        name: { ja: "硬化", en: "Solid Wax" },
        coolTime: { firstStageSeconds: 18 },
      },
      tertiary: {
        name: { ja: "熔蝋", en: "Molten Wax" },
        coolTime: { firstStageSeconds: 25, secondStageSeconds: 25 },
      },
    },
  },
  {
    name: {
      ja: "｢悪夢｣",
      en: '"Nightmare"',
    },
    skills: {
      primary: {
        name: { ja: "渡鴉", en: "Raven" },
        coolTime: { firstStageSeconds: 20 },
      },
      secondary: {
        name: { ja: "凶兆", en: "Bad Omen" },
        coolTime: { firstStageSeconds: 50 },
      },
    },
  },
  {
    name: {
      ja: "書記官",
      en: "Clerk",
    },
    skills: {
      primary: {
        name: { ja: "審査", en: "Inspect" },
        coolTime: { firstStageSeconds: 6, secondStageSeconds: 6 },
      },
      secondary: {
        name: { ja: "記録・無効", en: "Record\n& Invalid" },
        coolTime: { firstStageSeconds: 10, secondStageSeconds: 9 },
      },
    },
  },
  {
    name: {
      ja: "隠者",
      en: "Hermit",
    },
    skills: {
      primary: {
        name: { ja: "奇跡", en: "Miracle" },
        coolTime: { firstStageSeconds: 12 },
      },
      secondary: {
        name: { ja: "感知", en: "Meditation" },
        coolTime: { firstStageSeconds: 60 },
      },
      tertiary: {
        name: { ja: "寄託", en: "Attachment" },
        coolTime: { firstStageSeconds: 40 },
      },
    },
  },
  {
    name: {
      ja: "夜の番人",
      en: "Night Watch",
    },
    skills: {
      primary: {
        name: { ja: "風域", en: "Tempest" },
        coolTime: { firstStageSeconds: 13 },
      },
      secondary: {
        name: { ja: "風行", en: "WindWalk" },
        coolTime: { firstStageSeconds: 5 },
      },
    },
  },
  {
    name: {
      ja: "オペラ歌手",
      en: "Opera Singer",
    },
    skills: {
      primary: {
        name: { ja: "暗影の\n跳躍", en: "Shadow\nLeap" },
        coolTime: { firstStageSeconds: 8 },
      },
      secondary: {
        name: { ja: "影の追想", en: "Shadow\nDance" },
        coolTime: { firstStageSeconds: 20 },
      },
      tertiary: {
        name: { ja: "影襲", en: "Shadow-\nstrike" },
        coolTime: { firstStageSeconds: 15, secondStageSeconds: 5 },
      },
    },
  },
  {
    name: {
      ja: "「フールズ・ゴールド」",
      en: '"Fool\'s Gold"',
    },
    skills: {
      primary: {
        name: { ja: "不安定\nエリア", en: "Unstable\nGround" },
        coolTime: { firstStageSeconds: 22 },
      },
      secondary: {
        name: { ja: "磁力変換", en: "Magnetic\nConversion" },
        coolTime: { firstStageSeconds: 20, secondStageSeconds: 5 },
      },
      tertiary: {
        name: { ja: "一触即発", en: "Instant\nReaction" },
        coolTime: { firstStageSeconds: 20 },
      },
    },
  },
  {
    name: {
      ja: "時空の影",
      en: "The shadow",
    },
    skills: {
      primary: {
        name: { ja: "古の面", en: "Ancient\nVisage" },
        coolTime: { firstStageSeconds: 15 },
      },
      secondary: {
        name: {
          ja: "憑依(第\n1スキル\n解放後)",
          en: "infection\n(1st skill\nunlocked)",
        },
        coolTime: { firstStageSeconds: 38 },
      },
      tertiary: {
        name: { ja: "空間転送", en: "Inter-\ndimensional\nTravel" },
        coolTime: { firstStageSeconds: 45 },
      },
    },
  },
];
