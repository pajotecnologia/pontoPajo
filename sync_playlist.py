"""
PAJO TECNOLOGIA - SINCRONIZADOR DE PLAYLIST DO YOUTUBE (RWTECH)
Script de sincronização automática com a Playlist oficial:
https://www.youtube.com/watch?v=CBVuQZ39h5Q&list=PLVRRzSJdt2auVSiXtSTKkhodyjZAJZnKY
"""

import urllib.request
import xml.etree.ElementTree as ET
import json
import os
from datetime import datetime

PLAYLIST_ID = "PLVRRzSJdt2auVSiXtSTKkhodyjZAJZnKY"
FEED_URL = f"https://www.youtube.com/feeds/videos.xml?playlist_id={PLAYLIST_ID}"
OUTPUT_FILE = "videos_feed.json"

def fetch_playlist_videos():
    print(f"[*] Consultando feed oficial do YouTube para a Playlist: {PLAYLIST_ID}...")
    req = urllib.request.Request(
        FEED_URL,
        headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
    )
    
    with urllib.request.urlopen(req, timeout=15) as response:
        xml_content = response.read().decode("utf-8")
        
    root = ET.fromstring(xml_content)
    ns = {
        "atom": "http://www.w3.org/2005/Atom",
        "yt": "http://www.youtube.com/xml/schemas/2015",
        "media": "http://search.yahoo.com/mrss/"
    }
    
    videos = []
    for entry in root.findall("atom:entry", ns):
        vid_id_node = entry.find("yt:videoId", ns)
        title_node = entry.find("atom:title", ns)
        desc_node = entry.find(".//media:description", ns)
        pub_node = entry.find("atom:published", ns)
        
        vid_id = vid_id_node.text if vid_id_node is not None else ""
        title = title_node.text if title_node is not None else ""
        desc = desc_node.text.strip() if desc_node is not None and desc_node.text else ""
        pub = pub_node.text if pub_node is not None else datetime.utcnow().isoformat()
        
        if vid_id:
            videos.append({
                "id": vid_id,
                "youtubeId": vid_id,
                "title": title,
                "desc": desc,
                "published": pub,
                "thumbnail": f"https://img.youtube.com/vi/{vid_id}/hqdefault.jpg",
                "directUrl": f"https://www.youtube.com/watch?v={vid_id}&list={PLAYLIST_ID}"
            })
            
    print(f"[+] Total de aulas encontradas na playlist: {len(videos)}")
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(videos, f, indent=2, ensure_ascii=False)
        
    print(f"[OK] Arquivo {OUTPUT_FILE} atualizado com sucesso!")
    return videos

if __name__ == "__main__":
    fetch_playlist_videos()
