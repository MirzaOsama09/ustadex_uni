Get-ChildItem -Filter *.html | ForEach-Object {
    $c = Get-Content -Raw $_.FullName
    $c = $c -replace '(?m)(^[ \t]*)(<!--\s*(<a[^>]+>.*?</a>)\s*-->)', "`$1`$3`r`n`$1`$2"
    Set-Content -NoNewline $_.FullName -Value $c
}

