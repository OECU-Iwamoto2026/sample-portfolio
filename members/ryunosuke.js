addMember({
  id: "ryunosuke",                       // ファイル名・_list.js と同じID
  name: "中邨隆之介",
  kana: "なかむらりゅうのすけ",
  color: "green",                        // green / blue / coral / yellow
  avatar: "assets/ryunosuke-avatar.png", // メンバー紹介カードの画像
  avatarAlt: "中邨隆之介さんのアバター",
  heroAvatar: "assets/ryunosuke-avatar.png", // トップの集合ビジュアル用（省略すると avatar を使う）
  heroSize: "primary",                   // normal / primary / tall / wide
  intro: "MBTIは運動家（ENFP）です。",
  details: [
    ["趣味", "映画鑑賞"],
    ["ひとこと", "よろしくお願いします！"],
  ],

  // ↓ ここから下はメンバー詳細ページ（member.html）に表示されます
  about: "",
  skills: [],
  links: {
    // github: "https://github.com/ユーザー名",
  },
  works: [],
});
