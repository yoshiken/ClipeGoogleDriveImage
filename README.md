# これなに

GoogleDriveの画像をimgタグで共有できるようにする拡張

Alt + c でURLをいい感じにしてクリップボードに入れてくれる

# 動作的になにしてんの

通常GoogleDriveの画像のURLは↓のようになる

閲覧のみ
https://drive.google.com/file/d/[UUID]/view

編集可能
https://drive.google.com/file/d/[UUID]/edit

これだけだとimgタグに貼れないので↓のように変えるといい感じに貼れる

http://drive.google.com/uc?export=view&id=[UUID]

e.g.)
https://drive.google.com/file/d/0B2LqxGTtH5UHajc0VnNwb1ZtaEU/view
↓

> <img src="http://drive.google.com/uc?export=view&id=0B2LqxGTtH5UHajc0VnNwb1ZtaEU">

<img src="http://drive.google.com/uc?export=view&id=0B2LqxGTtH5UHajc0VnNwb1ZtaEU">


めんどくさいから文字数で抜いてるので色々バグあるかも。
気が向いたら正規表現でいい感じにするね…

# 連絡先

Twitter:@yoshiken_tut
